const express = require("express");
const database = require("mysql2");
const app = express();
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'eduardo',
    database: 'node',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const connection = database.createPool(config).promise();

app.get("/", async (req,res) => {

await connection.query(`INSERT INTO people (name) values ('Eduardo J')`);

var data = await getData();

const names = data.map(obj => "<li>" + obj.name + "</li>") 
const dataAsHtmlList = `<ul>${names}</ul>`.replaceAll(",", "")

res.send("<h1>Full Cycle Rocks!</h1>" + dataAsHtmlList);

});

app.listen(3000, () => { console.log("Listening on port 3000!")  });

async function getData() {
var data = await connection.query(`SELECT name from people`);
return data[0];
}

