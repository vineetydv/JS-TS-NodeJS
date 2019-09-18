class Account{
    constructor(balance = 10000){
        this.withdrawLimit = 3;
        this.wCount = 0;
        this.trans = [];
        if(balance > 10000){
            this._balance = balance;
        }
        else{
            console.log("Balance is less than 10k");
        }
    }

    get money(){
        return this._balance;
    }

    deposit(amount){
        this._balance += amount;
        this.trans.push(new Transaction("deposit", amount));
        console.log("Amount Deposited is "+amount+" New account balance is "+this._balance);
    }

    withdraw(wAmount){
        if(this._balance < wAmount){
            console.log("insufficient balance : Current Balance is "+this._balance+" and withdraw amount requested is "+wAmount );
        }else{
            this._balance -= wAmount;
            console.log("Amount withdrawn is "+wAmount+" New account balance is "+this._balance);
            this.trans.push(new Transaction("withdraw", wAmount));
            if(this.wCount >= this.withdrawLimit){
                let fees = wAmount/200;
                this._balance -= fees;
                console.log("Amount withdrawn is "+fees+" New account balance is "+this._balance);
                this.trans.push(new Transaction("fees", fees));
            }
            this.wCount++;
        }
    }

    print(){
        this.trans.forEach(function(num){
            console.log(num.date+" - "+num.type+" - "+num.amount);
        })
    }
}

class Transaction{
    constructor(type, amount){
    this.type = type;
    this.amount = amount;
    this.date = new Date().toLocaleString();
}
}

class CurrentAccount extends Account{
    constructor(balance = 10000){
        super(balance);
        this.withdrawLimit = 10;
    }
    withdraw(wAmount){
        super.withdraw(wAmount);
    }
}

let acc1 = new CurrentAccount(20000);
// let acc1 = new Account(20000);
acc1.deposit(3000);
acc1.deposit(5000);
acc1.withdraw(1000);
acc1.withdraw(10000);
acc1.withdraw(5000);
acc1.withdraw(3000);
acc1.withdraw(12000);
console.log("-----------Print Statement------------");
acc1.print();

console.log("Final Balance : "+acc1.money);