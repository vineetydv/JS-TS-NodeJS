//class level decorator
function logClasses(fun: Function) {
    console.log("*****************Logging**********************");
    let prop: any = Reflect.getOwnPropertyDescriptor(fun, "name");
    console.log(`***Let's construct an object of  ${prop.value}`);
    console.log("---More information---");
    console.log(prop);
    let obj = Reflect.construct(fun, ["Tracking"]);
    console.log("----object is ", obj);
    obj.calculateBudget();
    console.log("*****************End of Logging**********************");

}

function logging(enabled: boolean = false): any {
    return enabled ? logClasses : null;
}

//Method level decorator
function override(enabled: boolean): any {
    let decorator = function(target: any, 
            methodName: string, 
            descriptor: PropertyDescriptor) {
        descriptor.writable = enabled;
    };
    return decorator;
}

@logging(true)
class Project {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @override(false)
    calculateBudget() {
        console.log("100cr");
    }
    
}

let tracking: Project = new Project("Tracking Service");
tracking.calculateBudget = function() {
    console.log("ZERO");
};
tracking.calculateBudget();