const mongoose = require("mongoose");
const { pokemons } = require("../models/model");

const sayHello = async (req, res) => {
    res.send('Hello world!');
};

const getItems = async (req, res) => {
    const items = await pokemons.find({});
    res.send({ items });
};

module.exports = { sayHello, getItems };