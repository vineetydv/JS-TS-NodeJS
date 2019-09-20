"use strict";
function work() {
}
setTimeout(work, 1000);
class Animal {
}
//function eat(){}
//let eat = function(){}
function breedAnimalsWithName(breed) {
    // let breed1 = new breed("dog");
    let breed1 = Reflect.construct(breed, ["dog"]); //Alternative of line no. 14
    breed1.eat();
}
// breedAnimalsWithName()
class Horse extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("Animal type " + this.name);
    }
}
breedAnimalsWithName(Horse);
//class Cat extends Animal
let Cat = class extends Animal {
    eat() {
        console.log("meoe meow");
    }
};
class Donkey extends Animal {
    eat() { }
}
function breedAnimals(breed) {
}
breedAnimals(Cat);
breedAnimals(Donkey);
function train(animal) {
}
let snoopy = new Cat();
let dog = new class extends Animal {
    eat() {
        let myfriend = new class extends Animal {
            eat() {
            }
        };
        myfriend.eat();
        console.log("chow chow");
    }
};
dog.eat();
let dinosaur = new class {
    swim() {
        console.log("swimming");
    }
};
let frog = {
    //    sleep: function() {},
    swim: function () { },
    walk: function () { },
    fly: function () { }
};
let fish = {
    swim: function () { }
};
let man = {
    walk: function () { }
};
