"use strict";
let double = (value) => value * 2;
console.log(double(10));
let greet = function (name = "Ram") {
    if (name === undefined) {
        name = "Sam";
    }
    console.log("Hello, " + name);
};
greet();
greet("Ram");
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
let newArray = [55, 20];
Array.prototype.push(...numbers);
console.log(newArray);
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
let scientist = { firstName: "Will", experience: 12 };
let { firstName, experience } = scientist;
console.log(firstName, experience);
