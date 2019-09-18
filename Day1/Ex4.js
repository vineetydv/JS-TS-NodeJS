function print(){
let numbers = [101, 22, 43, 14, 5, 906, 310, 561, 84, 23, 100];

numbers.forEach(function(num) {
	console.log(num);
}); 

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log("Sum of all numbers : "+numbers.reduce(reducer));
console.log("Sum of all numbers : "+numbers.reduce(function(sum, next){
    return sum + next;
}));

let odd = numbers.find(function(num){
    return num % 2 != 0;
});
console.log("first odd number is :"+odd);

let squares = numbers.map(function(num){
    return num*num;
})

console.log("Squares of all the numbers");
for( let key in squares, numbers){
    console.log(numbers[key]+" : "+squares[key])
}

let divBy5 = numbers.filter(function(num){
    return num % 5 == 0;
});
console.log("Numbers divisible by 5 are :"+divBy5);

let evenNumbers = numbers.filter(function(num){
    return num % 2 == 0;
});
console.log("All even numbers are :"+evenNumbers);

}

print();