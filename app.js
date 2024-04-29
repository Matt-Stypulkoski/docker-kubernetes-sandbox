const express = require('express');
const { resolve } = require('path');
const { DbClient } = require("./database.js");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const dbClient = DbClient();
    const query = {name: "Latte"};
    const db = dbClient.db("test_drinks");
    const collection = db.collection("coffee");
    
    collection.findOne(query).then((response) => {
        res.send(`<div><p>This is your drink ${response.name}</p></div>`)
    });

    button = '<button type="button">Add text</button>';
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});