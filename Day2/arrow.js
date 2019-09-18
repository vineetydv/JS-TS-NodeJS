 this.name = "global";
 let self = this;
 let person = {
     name : "sam",

     printInfo : function(){
         console.log(this);         // refers to person object scope
         console.log(this.name);
         console.log(self.name);
     },
     printArrow : () => {
         console.log(person.name); 
         console.log(this);         //refers to global scope (Outside Person Object)
         console.log(this.name);
     } 
 }

 person.printInfo();
 console.log("*******************************");
 person.printArrow();