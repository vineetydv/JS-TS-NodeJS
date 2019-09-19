let generateRandom = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let marks = Math.round(Math.random() * 100);
            if(marks > 50) {
                resolve(marks);
                //mom(marks);
            }
            else {
                reject(marks);
            }
                
        }, 2000);
    });
    return promise;
}

let mom = (marks) => {
    const promise = new Promise((resolve, reject) => {
        if(marks > 90) {
            resolve("Cool! I take credit");
        }
        else {
            reject("Scold dad");
        }
    });
    return promise;
}

async function doSomething() {
   await generateRandom()
        .then(res =>  mom(res))
    //  .then(res => grandmom(res))                 //in case if mom wants to call grandmom further
        .then(res => console.log(res))
        .catch(res => console.log(`Sorry! ${res}`));
    
    console.log("End of doSomething");    
}
doSomething();