let express = require("express");
let app = express();
let path = require("path");

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get("/sensex", (req, res) => {
    let sensex = {
        exchange: "NSE",
        value: 1754
    };
    res.send(JSON.stringify(sensex));
});


app.get('/dist/hello.js.map', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'dist', "hello.js.map"));
});

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'dist', "app.js"));
});

app.listen(3000);
console.log("***Server started on 3000 port");