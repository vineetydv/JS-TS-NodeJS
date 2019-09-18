let a = 20;
let b = 30;

[a, b] = [b, a];

// a = a+b;
// b = a-b;
// a = a-b;

console.log(a,b);

let str = "level";
let revStr = [...str].reverse().join('');

if(str === revStr)
{
    console.log("Its a pelindrome");
}
else{
    console.log("Its not a pelindrome");
}

let car = {
    model : "BMW",
    price : 4900000,
    regDetails : {
        city: "Bangalore"
    }
}

let {model, regDetails : {city}} = car;
// let city = car.regDetails.city;

console.log(`Model : ${model}, City : ${city}`);