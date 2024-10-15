const express = require('express');
const db_conn = require('./db');
const User = require('./User.schema');
const app = express();

app.get('/', async(req, res) => {
    let data = await User.findOne();
    res.send(data);
});

app.post('/', async(req, res) => {
    let data = await User.create(req.body);
    res.send(data);
});

app.delete('/:id', async(req, res) => {
    let {id} = req.params.id;
    let data = await User.findByIdAndDelete(id);
    res.send(data);
});

app.patch('/:id', async(req, res) => {
    let {id} = req.params;
    let data = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.send(data);
});

app.listen(8090, ()=>{
    console.log("Connected Server");
    db_conn();
})