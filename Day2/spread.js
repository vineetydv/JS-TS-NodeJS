let arr1 = [1,2];
let arr2 = [3,4,5];

let numbers = [...arr1, ...arr2, ...[11,21]];
console.log(numbers);

function add(a,b){

    console.log(`${a+b}`);
}

add(...arr2);