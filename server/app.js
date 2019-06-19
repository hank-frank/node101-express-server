// import files and packages up here
const express = require('express'); 
const morgan = require('morgan');
const data = require('./data.json')
// create your express server below
var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.status(200).send('New Express Server')
})
// add your routes and middleware below
app.get('/data', function(req, res){
    res.status(200);
    res.send(data);
})

app.get('*', function(req, res){
    res.status(200,send('No Page Found'));
});
// finally export the express application
module.exports = app;