var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');

var database = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'chat',
  password : ''
});

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

module.exports = {
  messages: {
    get: function (req, res) {
      database.query('SELECT * from messages',function(err,rows){
        if (err) throw err;
        else res.status(200).json(rows).send();
      });
    console.log('message get request: ' + req.body)
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      var inserts = 'INSERT into messages (user,room,date,text,crypto) values(?,?,?,?,?);';
      var variables = [message.userID,message.roomID,Date.now(),message.text,(message.crypto ? 1:0)];
      var inserts = mysql.format(inserts,variables);
      database.query(inserts);
      res.status(201).send('Message created.');
    // console.log('message post request: ' + req.body)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {console.log('user get request: ' + req.body)},
    post: function (req, res) {
      console.log('user post request: ' + req.body.name);
      database.query('INSERT into users (name) values("' + req.body.name + '");',function(err,result){
        if (err) throw err;
        else{
          var response = {id:result.insertId};
          res.status(201).json(response).send();
        }
      });
    }

  }
};

