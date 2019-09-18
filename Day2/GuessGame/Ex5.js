var IOUtil = require('./IOUtil');
var Game = require('./Game')

console.log("Welcome to the Guessing Game. Enter a number between 1 and 100");
let game1 = new Game();

IOUtil.start((text) => {
    let guess = parseInt(text)
	//if game is over call IOUtil.stop()
    let result = game1.checkValue(guess);

    if(result === "Correct"){
        console.log(`You’ve got it in ${game1.count} attempts !!!.`);
        IOUtil.stop();
    }else{
        console.log(result);
        // IOUtil.start();
    }
	//YOUR CODE GOES HERE
});