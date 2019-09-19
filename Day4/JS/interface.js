"use strict";
class sedan {
    constructor(model, price, company) {
        this.model = model;
        this.price = price;
        this.company = company;
        this.type = "Sedan";
    }
}
let car1 = new sedan("Honda City", 1200000, "Honda");
console.log(car1.company);
