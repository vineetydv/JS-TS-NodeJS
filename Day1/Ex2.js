function add(){
    let sum = 0;
    for( let i = 0; i<arguments.length;i++)
    {   
        if(typeof(arguments[i]) == "number"){
        sum += arguments[i];
        }
    }

    console.log("Sum : " +sum);
}

function greatest(){
    let largest = 0;
    for( let i = 0; i<arguments.length;i++)
    {   
        if(typeof(arguments[i]) == "number"){
            if(arguments[i] > largest)
            {
                largest = arguments[i];
            }
        }
    }

    console.log("Largest : "+largest);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);
