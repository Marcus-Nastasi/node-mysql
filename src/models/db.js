require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: "localhost",
   user: 'root',
   password: process.env.DBPASS,
   database: process.env.DBNAME,
   port: process.env.DBPORT
});

module.exports = { connection };


