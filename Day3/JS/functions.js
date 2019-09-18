"use strict";
function println(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
function addALot(...args) {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    });
    return sum;
}
let result = add(4, 3);
console.log(result);
result = addALot(1, 2.0, 3);
console.log(result);
