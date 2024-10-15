const express = require('express');
const db_conn = require('./db');
const app = express();

app.listen(8090, ()=>{
    console.log("Connected Server");
    db_conn();
})