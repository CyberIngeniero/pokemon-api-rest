require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongo = require("mongodb").MongoClient;
const http = require('http');
const methodOverride  = require("method-override");

const bodyParser = require("body-parser");
const dbConnect = require('../config/mongo');

const app = express();
const router = express.Router();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;


// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.json());

const DB_URI = process.env.DB_URI;


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, res) => {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        db = mongoose.connection;
        pokemons = db.collection('pokemons');
        console.log('Connected to Database');
    }
});


//app.use('/pokemons', require('../routes/routes'));


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


// find pokemon by name
app.get('/Pokemons/by-name/:pokename', function(req, res) {
    pokemons.find({name: req.params.pokename}).toArray(function(err, result) {
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