interface Car{
    type : string,
    model : string,
    price : number,
    [someProperty: string] : any,
    // printMsg : (str: string) => void
}

class sedan implements Car{
    type : string;
    // model : string;
    // price : number;
    // company: string;
    constructor(public model: string, public price: number, public company: string){
        // this.model = model;
        this.type = "Sedan";
        // this.price = price;
        // this.company = company;
    }
}

let car1: Car = new sedan("Honda City", 1200000, "Honda");
console.log(car1.company);