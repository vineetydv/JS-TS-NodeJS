console.log("Hello World!");

let str: string[] = ["Java", "JS", "TS", "NodeJS"];
console.log(str);

let items: any[] = ["any", 0 , false];
console.log(items);

let car: {model: string, version: string, price: number} = {
    model: "Audi",
    version: "A5",
    price: 6500000
}

console.log(car);

car = {
    model: "BMW",
    version: "X1",
    price: 3500000
}
console.log(car);

let x;
console.log(typeof(x));
x =12;
console.log(typeof(x));
x = "string";
console.log(typeof(x));

let chars = x.split('');
let charCode = chars[0].charCodeAt(0);
console.log(charCode);