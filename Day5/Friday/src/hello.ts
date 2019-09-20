// declare var $: any

import { PI, add } from './math';
import axios from 'axios';

console.log(PI);
let sum:number = add(12, 24);
console.log(sum);

type ServerOutput = { exchange: string, value: number };
$().ready(() => {
    $('#sensexbutton').on("click", () => {
        axios
            .get<ServerOutput>("/sensex")
            .then(response => {
                let { exchange, value } = response.data;
                let message = `Exchange: ${exchange} - Price: ${value}`;
                $("#message").text(message);
            });

    });


    $('#randombutton').on("click", () => {
        let randomNum: number = Math.random() * 100;
        console.log(randomNum);
        $('#randomOutput').text(randomNum);
    });
});