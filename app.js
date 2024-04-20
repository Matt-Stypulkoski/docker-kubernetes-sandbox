const express = require('express')
const { resolve } = require('path')
const { DbClient } = require("./database.js")
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const dbClient = DbClient();
    const query = {name: "Latte"}
    const db = dbClient.db("test_drinks")
    const collection = db.collection("coffee")
    
    // async function queryDb(client, dbName, collName, query) {
    //     try {
    //         const db = client.db(dbName);
    //         const coll = db.collection(collName);            
    //         // const query = { name: "Latte" };
    //         const element = await coll.findOne(query);
    //         console.log(element)
    //         return element
    //     } 
    //     finally {
    //         await client.close();
    //     }
    // }
    // const drink = collection.findOne(query).then((res) => {return res.name})
    // console.log(`THIS DRINK: ${drink}`)
    // const getDrink = async (resolve, reject) => {
        // const res = await drink
        // return res
    // }
    // async function queryDb((dbClient, dbName, collName, query) => {

    // })
    // console.log(dbCall)
    collection.findOne(query).then((response) => {
        res.send(`<div><p>This is your drink ${response.name}</p></div>`)
    })
    // html = `<div><p>This is your drink)}</p></div>`
    // async function AddText(text) {
    //     url = "http://localhost:3000/addText"
    //     const response = await fectch(url, {
    //         method: "POST"
    //     })
    //     return response.json()
    // }
    button = '<button type="button">Add text</button>'
    // res.send(html)
})

app.post(`/addText/:text}`, (req, res) => {

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})