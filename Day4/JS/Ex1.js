"use strict";
class MyMap {
    constructor() {
        this.wordStore = {};
    }
    setItem(key, item) {
        this.wordStore[key] = item;
    }
    getItem(key) {
        return this.wordStore[key];
    }
    clear() {
        this.wordStore = {};
    }
    printMap() {
        for (let key in this.wordStore) {
            console.log(`${key} - ${this.wordStore[key]}`);
        }
    }
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
let value = numberMap.getItem('apples');
console.log(value);
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
