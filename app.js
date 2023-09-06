const express = require('express');
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.use(bodyParser.urlencoded({extended: true})); // allows to route
app.post("/",function(req,res){
    const blacklistFlag = req.body.flags;
    const amount = req.body.amount;
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags="+blacklistFlag+"&format=txt&amount="+amount;
    res.write("<h1>Click the link given below too get joke!</h1>");
    res.write("<a href='"+url+"'>The Joke</a>");
    res.send
});


app.listen(3000,function(){
    console.log("Server started at 3000");
})
