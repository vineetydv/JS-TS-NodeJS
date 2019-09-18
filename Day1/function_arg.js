function doSomething(arg){
    console.log(typeof(arg));
    if(typeof(arg) == "function"){
        arg();
    }
}

function getMeCoffee(){
     let work = function(){
        console.log("here is your coffee");
    }
    return work;
}

let fn = getMeCoffee();
fn();
// getMeCoffee()(); to invoke the function directly
let confuse = getMeCoffee();

doSomething(12);
doSomething("Name");
doSomething(true);
doSomething([]);
doSomething(function(){
    console.log("Anonymous Function");
});
doSomething(confuse);