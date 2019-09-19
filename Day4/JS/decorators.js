"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClasses(fun) {
    console.log("*****************Logging**********************");
    let prop = Reflect.getOwnPropertyDescriptor(fun, "name");
    console.log(`***Let's construct an object of  ${prop.value}`);
    console.log("---More information---");
    console.log(prop);
    let obj = Reflect.construct(fun, ["Tracking"]);
    console.log("----object is ", obj);
    obj.calculateBudget();
    console.log("*****************End of Logging**********************");
}
function logging(enabled = false) {
    return enabled ? logClasses : null;
}
function override(enabled) {
    let decorator = function (target, methodName, descriptor) {
        descriptor.writable = enabled;
    };
    return decorator;
}
let Project = class Project {
    constructor(name) {
        this.name = name;
    }
    calculateBudget() {
        console.log("100cr");
    }
};
__decorate([
    override(false)
], Project.prototype, "calculateBudget", null);
Project = __decorate([
    logging(true)
], Project);
let tracking = new Project("Tracking Service");
tracking.calculateBudget = function () {
    console.log("ZERO");
};
tracking.calculateBudget();
