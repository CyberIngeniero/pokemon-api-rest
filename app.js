const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser      = require("body-parser");
const methodOverride  = require("method-override");
const mongo = require("mongodb").MongoClient;

const app = express();
const router = express.Router();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://172.17.0.2:27017/pokemon';


// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.json());
app.set('port', PORT);
app.set('json spaces', 2);


// connection to DB
mongoose.connect(DB_URI, function (err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
        db = mongoose.connection;
        pokemons = db.collection("pokemons");
    }
});


// Example Route
app.get('/', function(req, res) {
    res.send("Hello world!");
});


//show all pokemons
app.get('/Pokemons/all', function(req, res) {
    pokemons.find().toArray(function(err, result) {
        if(err) res.send(500, err.message);
        res.json(result);
    });
});


// show all pokemons name
app.get('/Pokemons/all-names', function(req, res) {
    pokemons.distinct(name, function(err, result) {
        if(err) res.send(500, err.message);
        res.json(result);
    });
});


// find pokemon by type
app.get('/Pokemons/by-type/:poketype', function(req, res) {
    pokemons.find({type: req.params.poketype}).toArray(function(err, result) {
        if(err) res.send(500, err.message);
        res.json(result);
    });
});


// start server
server.listen(PORT, function() {
    console.log("Node server running on http://localhost:3000");
});