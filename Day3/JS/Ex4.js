"use strict";
var hobbies;
(function (hobbies) {
    hobbies[hobbies["Sports"] = 0] = "Sports";
    hobbies[hobbies["Cooking"] = 1] = "Cooking";
    hobbies[hobbies["Tv"] = 2] = "Tv";
})(hobbies || (hobbies = {}));
var accountType;
(function (accountType) {
    accountType[accountType["Savings"] = 0] = "Savings";
    accountType[accountType["Current"] = 1] = "Current";
})(accountType || (accountType = {}));
let bankAccount1 = {
    number: "SB-23987981273",
    money: 2000,
    type: accountType.Savings,
    fee: "0.5%",
    deposit(value) {
        this.money += value;
    }
};
let bankAccount2 = {
    number: 23987983,
    money: 20000,
    type: accountType.Current,
    fee: "0.05%",
    deposit(value) {
        this.money += value;
    }
};
let sam = {
    name: "Sam",
    bankAccounts: [bankAccount1, bankAccount2],
    hobbies: [hobbies[0], hobbies[1]]
};
sam.bankAccounts[0].deposit(3000);
sam.bankAccounts[1].deposit(3000);
console.log(sam.bankAccounts);
console.log(sam.hobbies);
