
class MyMap<T>{
    private wordStore: { [index: string]: T } = {};     //Object which can have any number of properties of type string and value of type T
    constructor(){

    }

    setItem(key: string, item: T){

        this.wordStore[key] = item; 
    }

    getItem(key: string) : T{
        return this.wordStore[key];
    }

    clear(){
        this.wordStore = {};
    }

    printMap(){
        for(let key in this.wordStore){
            console.log(`${key} - ${this.wordStore[key]}`);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
let value = numberMap.getItem('apples');
console.log(value);

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();