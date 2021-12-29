const express = require('express');
const app = express();
app.use(express.urlencoded({extended: 'true'}));

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://shon5544:sbs32465169132184@cluster0.19f58.mongodb.net/dawn-coding-database?retryWrites=true&w=majority', (err, client)=>{
    if(err) return console.log(err);

    app.listen('8080', ()=>{
        console.log('8080으로 접속 완료');
    })
});