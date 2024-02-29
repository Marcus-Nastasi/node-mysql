const { connection } = require('../models/db');

exports.read = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   var data = [];

   connection.query(
      'SELECT * FROM todos;', 
      function(err, results, fields) {
         data = (results);
         return res.json(data);
      }
   );
};

exports.readOne = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   var data = [];

   connection.query(
      'SELECT * FROM todos WHERE ID IN (?);', [ req.body.id ], 
      function(err, results, fields) {
         data = (results);
         return res.json(data);
      }
   );
};

exports.insert = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   connection.query(
      'INSERT INTO todos (description) VALUES (?);', [ req.body.description ], 
      function(err, results, fields) {
         return res.json({ status: "ok" });
      }
   );
};


