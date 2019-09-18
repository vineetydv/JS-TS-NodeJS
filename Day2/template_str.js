let info = [];
info["name"] = "sam";
info["age"] = 12;
info["country"] = "australia";
info["city"] = "sydney";
 
let str = "";

for (let key in info){
    if(key == "name"){
         str += `?${key}=${info[key]}`;
    }   
    else{
        str += `&${key}=${info[key]}`;
    }
}

console.log(str);