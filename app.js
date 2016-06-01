var express     = require('express');
var mysql       = require('mysql');

var connection = mysql.createConnection({
    host     : 'mysql',
    user     : 'root',
    password : 'pw',
    database : 'udemy_course'
});

var app = express();

connection.connect(function(err){
    if(!err) {
        console.log('Connected to database...');
    } else {
        console.log('Error connecting to database: ' + err.stack);
    }
});

app.get("/",function(req, res){
    connection.query('SELECT name, description from hat', function(err, rows, fields) {
        if (!err && rows.length) {
            var hats = '';

            for (var i = 0; i < rows.length; i++) {
                hats += rows[i].name + ": " + rows[i].description + "<br>";
            }

            res.send(hats);
        } else {
            console.log('Error while running query: ' + err.code);
            res.send('Sorry! Something went wrong.');
        }
    });
});

app.listen(8080);
