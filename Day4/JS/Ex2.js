let square = (num) => {
    let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let result = num*num;
            resolve(result);
        }, 1000)
    }) 
    return promise1;   
}

let increment = (num) => {
    let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let result = num + 1;
            resolve(result);
        }, 2000)
    })
    
    return promise1;
}

let double = (num) => {
    let promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let result = num*2;
            resolve(result);
        }, 3000)
    })  
    
    return promise1;
}

function doSomething(){
   
   let result =  square(10)
                .then(res => increment(res))
                .then(res => double(res))
                .then(res => console.log("Result after calculations :"+res));

    // console.log("Result after calculations :"+result);
}
doSomething();

