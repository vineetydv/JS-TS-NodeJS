// let a = 12;
// let b = 13; 

// function calculate(operation){
//     if(operation == "add")
//     {
//         return a+b;
//     }
//     if(operation == "sub")
//     {
//         return a-b;
//     }
//     if(operation == "mul")
//     {
//         return a*b;
//     }
// }

// let sum = calculate("add");
// console.log("Sum : "+sum);

// let diff = calculate("sub");
// console.log("Diff : "+diff);

// let mul = calculate("mul");
// console.log("Mul : "+mul);

let calculate = function(operation) {
	let a = 12;
	let b = 13;
	return operation(a, b);
}

let sum = calculate(function(x, y ) {
	return (x + y);
});
console.log(sum);

calculate(function(x, y) {
	return (x-y);	
});

calculate(function(x, y) {
	if(x > y) return x - y;
	if(x < y) return y - x;
});

calculate(function(x, y ) {
	console.log("Diff: " + (x - y));
});

let product = calculate(function(x, y ) {
	return x * y
});
console.log(product);

calculate(function(x, y ) {
	return x / y
});
calculate(function(x, y ) {
	return x*x + y*y + 2*x*y
});