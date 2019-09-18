function add(...args){
    // let sum = 0;
    // for( let i = 0; i<args.length;i++)
    // {   
    //     if(typeof(args[i]) == "number"){
    //     sum += args[i];
    //     }
    // }
    const sum = args.reduce(function(sum, currentValue){
        return sum + currentValue;
    })

    console.log("Sum : " +sum);
}

function greatest(...args){
    // let largest = 0;
    // for( let i = 0; i<args.length;i++)
    // {   
    //     if(typeof(args[i]) == "number"){
    //         if(args[i] > largest)
    //         {
    //             largest = args[i];
    //         }
    //     }
    // }
    const largest = args.reduce(function(first, next){
        return first > next ? first : next;
    })

    console.log("Largest : "+largest);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);
