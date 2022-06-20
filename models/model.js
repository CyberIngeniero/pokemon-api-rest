const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({}, {strict: false});

module.exports = mongoose.model('pokemons', PokemonSchema);