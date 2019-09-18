
let double = (value: number): number => value * 2;

console.log(double(10));
let greet = function (name: string = "Ram") {
    if (name === undefined) { name = "Sam"; }
    console.log("Hello, " + name);
};
greet();
greet("Ram");
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
let newArray: number[] = [55, 20];
Array.prototype.push(...numbers);
console.log(newArray);
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3]: number[] = testResults;
console.log(result1, result2, result3);
let scientist: {firstName: string, experience: number} = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);
