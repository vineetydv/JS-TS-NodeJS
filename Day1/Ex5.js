function Account(balance){
    let wCount = 0;
    let trans = [];
    if(balance > 10000){
        this.balance = balance;
    }
    else{
        console.log("Balance is less than 10k");
    }

    this.deposit = function(amount){
        this.balance += amount;
        trans.push(new Transaction("deposit", amount));
        console.log("Amount Deposited is "+amount+" New account balance is "+this.balance);
    }

    this.withdraw = function(wAmount){
        if(this.balance < wAmount){
            console.log("insufficient balance : Current Balance is "+this.balance+" and withdraw amount requested is "+wAmount );
        }else{
            this.balance -= wAmount;
            console.log("Amount withdrawn is "+wAmount+" New account balance is "+this.balance);
            trans.push(new Transaction("withdraw", wAmount));
            if(wCount >= 3){
                let fees = wAmount/200;
                this.balance -= fees;
                console.log("Amount withdrawn is "+fees+" New account balance is "+this.balance);
                trans.push(new Transaction("fees", fees));
            }
            wCount++;
        }
    }

    this.print = function(){
        trans.forEach(function(num){
            console.log(num.date+" - "+num.type+" - "+num.amount);
        })
    }

}

function Transaction(type, amount){
    this.type = type;
    this.amount = amount;
    this.date = new Date().toLocaleString();
}

let acc1 = new Account(20000);
acc1.deposit(3000);
acc1.deposit(5000);
acc1.withdraw(1000);
acc1.withdraw(10000);
acc1.withdraw(5000);
acc1.withdraw(3000);
acc1.withdraw(12000);
console.log("-----------Print Statement------------");
acc1.print();

console.log("Final Balance : "+acc1.balance);