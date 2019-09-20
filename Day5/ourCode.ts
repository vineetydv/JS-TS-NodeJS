function work() {

}
setTimeout(work, 1000);

abstract class Animal {
    abstract eat(): void;
}
//function eat(){}
//let eat = function(){}

function breedAnimalsWithName(breed: { new(name: string): Animal }){

    // let breed1 = new breed("dog");
    let breed1 = Reflect.construct(breed, ["dog"]);         //Alternative of line no. 14
    breed1.eat();
}

// breedAnimalsWithName()
class Horse extends Animal {
    constructor(public name: string) { super(); }
    eat(): void {
        console.log("Animal type "+this.name);
    }
}
breedAnimalsWithName(Horse);

//class Cat extends Animal
let Cat: { new(): Animal}  = class extends Animal {
    eat(): void {
        console.log("meoe meow");
    }
}
class Donkey extends Animal {
    eat(): void {}
}

function breedAnimals(breed: { new(): Animal }){

}
breedAnimals(Cat);
breedAnimals(Donkey);




function train(animal: Animal) {

}
let snoopy = new Cat();

let dog: Animal = new class extends Animal {
    eat(): void {
        let myfriend = new class extends Animal {
            eat(): void {

            }
        };
        myfriend.eat();
        console.log("chow chow");
    }
};
dog.eat();

interface Aquatic {
    swim(): void;
}

let dinosaur = new class implements Aquatic {
    swim(): void {
        console.log("swimming");
    }
}




interface Terrestrial {
    walk(): void;
}
interface Flyer {
    fly(): void;
//    [propName: string]: any
}

let frog: Aquatic & Terrestrial & Flyer = {
 //    sleep: function() {},
     swim: function() {},
     walk: function() {},
     fly: function() {}
};

let fish: Aquatic = {
    swim: function() {}
}; 

let man: Terrestrial = {
    walk: function() {}
}; 