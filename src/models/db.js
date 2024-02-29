const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: "localhost",
   user: 'root',
   password: 'Gomu1920!',
   database: 'todoslist',
   port: 3306
});

module.exports = { connection };


