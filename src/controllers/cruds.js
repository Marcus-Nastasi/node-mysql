const { connection } = require('../models/db');

exports.read = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   var data = [];

   connection.query(
      'SELECT * FROM todos;', 

      function(err, results) {
         data = (results);
         return res.json(data);
      }
   );
};

exports.readOne = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   var data = [];

   connection.query(
      'SELECT * FROM todos WHERE ID IN (?);', 
      [ req.params.id ],

      function(err, results) {
         data = (results);
         return res.json(data);
      }
   );
};

exports.insert = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   connection.query(
      'INSERT INTO todos (description) VALUES (?);', 
      [ req.body.description ],

      function() {
         return res.json({ status: "ok" });
      }
   );
};

exports.update = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   connection.query(
      'UPDATE todos SET description=? WHERE id=?;',
      [ req.body.description, req.body.id ],

      function() {
         return res.json({ status: "updated" });
      }
   );
};

exports.delete = (req, res) => {
   connection.connect(() => console.log('Conexão bem sucedida'));

   connection.query(
      'DELETE FROM todos WHERE id=?;',
      [ req.body.id ],

      function() {
         return res.json({ status: "deleted" });
      }
   );
};



