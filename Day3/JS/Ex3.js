"use strict";
let calculate = function (operation) {
    let a = 12;
    let b = 13;
    return operation(a, b);
};
let sum = calculate(function (x, y) {
    return (x + y);
});
console.log(sum);
calculate(function (x, y) {
    return (x - y);
});
calculate(function (x, y) {
    let res = 0;
    if (x > y) {
        res = x - y;
    }
    if (x < y) {
        res = y - x;
    }
    return res;
});
calculate(function (x, y) {
    return (x - y);
});
let product = calculate(function (x, y) {
    return x * y;
});
console.log(product);
calculate(function (x, y) {
    return x / y;
});
calculate(function (x, y) {
    return x * x + y * y + 2 * x * y;
});
