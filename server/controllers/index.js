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
    get: function (req, res) {console.log('message get request: ' + req.body)}, // a function which handles a get request for all messages
    post: function (req, res) {console.log('message post request: ' + req.body)} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {console.log('user get request: ' + req.body)},
    post: function (req, res) {
      console.log('user post request: ' + req.body.name);
      database.query('INSERT into users (name) values("' + req.body.name + '");',function(err,result){
        if (err) throw err;
        else res.status(201).send('Created username ' + req.body.name + ' with ID ' + result.insertId);
      });
    }

  }
};

