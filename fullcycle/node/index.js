const express = require('express')
const app = express()
const port = 3000
const config = {
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (name) values ('Eduardo J')`
connection.query(sql)

app.get('/', (req, res) => {
 res.send('<h1>Eduardo J</h1>')
	connection.query(`INSERT INTO people (name) VALUES ('Eduardo feito via curl')`)
	connection.end()
} )


app.listen(port, () => {
	console.log('Rodando na porta: ' + port)
})
