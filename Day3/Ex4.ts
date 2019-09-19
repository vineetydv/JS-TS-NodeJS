enum hobbies {
    "Sports" = 0,
    "Cooking",
    "Tv"
}

enum accountType {
    "Savings",
    "Current"
}

type bankAccount = {
    number : string | number,
    money : number,
    type : accountType
    fee : string,
    deposit : (value:number) => void 
}

type personType = {
    name : string,
    bankAccounts : [bankAccount, bankAccount],
    hobbies : string[]
}
let bankAccount1: bankAccount= {
    number: "SB-23987981273",
    money: 2000,
	type: accountType.Savings,
	fee: "0.5%",
    deposit(value: number) {
        this.money += value;
    }
};
let bankAccount2: bankAccount = {
    number: 23987983,
    money: 20000,
	type: accountType.Current,
	fee: "0.05%",
    deposit(value :number) {
        this.money += value;
    }
};

let sam : personType= {
    name: "Sam",
    bankAccounts: [bankAccount1, bankAccount2],
    hobbies: [hobbies[0], hobbies[1]]
};
sam.bankAccounts[0].deposit(3000);
sam.bankAccounts[1].deposit(3000);
console.log(sam.bankAccounts)
console.log(sam.hobbies);
