  
let printResult = (result) => console.log(result);

let generateRandom = (callback) => {
    setTimeout(() => {
        let num = Math.round(Math.random() * 100);
        callback(num);
        //return num;   
    }, 2000);
}

generateRandom(printResult);


//console.log(generateRandom());    //doesn't work, because at the time of log generate have not returned anything