// let calculate: ((operation: (x: number, y:number) => number)=>number) 
type MathOperation = (x: number, y:number) => number;
let calculate = function(operation :MathOperation): number{
	let a: number = 12;
	let b: number = 13;
	return operation(a, b);
}

let sum = calculate(function(x: number, y: number):number {
	return (x + y);
});
console.log(sum);

calculate(function(x: number, y: number):number {
	return (x-y);	
});

calculate(function(x: number, y: number):number {
    let res: number = 0;
	if(x > y){ res = x - y;}
    if(x < y){ res = y - x;}

    return res;
});

calculate(function(x: number, y: number):number {
    // console.log("Diff: " + (x - y));
    return (x-y);
});

let product = calculate(function(x: number, y: number):number {
	return x * y
});
console.log(product);

calculate(function(x: number, y: number):number {
	return x / y
});
calculate(function(x: number, y: number):number {
	return x*x + y*y + 2*x*y
});