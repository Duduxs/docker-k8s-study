const express = require("express");
const database = require("mysql2");
const app = express();
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'eduardo',
    database: 'node',
}

const connection = database.createConnection(config)

app.get("/", (req,res) => {
res.send("<h1>Full Cycle Rocks</h1>")
connection.query(`INSERT INTO people (name) values ('Eduardo J')`)
connection.end()
});

app.listen(3000, () => {
console.log("Listening on port 3000") 
});

