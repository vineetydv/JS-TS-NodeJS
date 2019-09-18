class Game{
    constructor(){
        this.randomNumber = Math.round(Math.random(1,100)*100);
        // console.log(`Number :`+this.randomNumber);
        this.count = 0;
        this.gameOver = false
    }

    checkValue(value){
        this.count++;
        if(value === this.randomNumber){
            return "Correct";
        }else if(value < this.randomNumber){
            return "Aim Higher";
        }else{
            return "Aim Lower";
        }
    }
}

module.exports = Game;

