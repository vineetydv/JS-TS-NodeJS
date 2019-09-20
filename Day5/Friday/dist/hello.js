"use strict";
// declare var $: any
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const axios_1 = __importDefault(require("axios"));
console.log(math_1.PI);
let sum = math_1.add(12, 24);
console.log(sum);
$().ready(() => {
    $('#sensexbutton').on("click", () => {
        axios_1.default
            .get("/sensex")
            .then(response => {
            let { exchange, value } = response.data;
            let message = `Exchange: ${exchange} - Price: ${value}`;
            $("#message").text(message);
        });
    });
    $('#randombutton').on("click", () => {
        let randomNum = Math.random() * 100;
        console.log(randomNum);
        $('#randomOutput').text(randomNum);
    });
});
//# sourceMappingURL=hello.js.map