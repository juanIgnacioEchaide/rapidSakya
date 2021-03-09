const mongoose = require('mongoose');
const Product = require('../models/product')
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    id: Number,
    name: String, 
    description: String, 
    price: Number, 
    products: [ Product ]
})

module.exports = mongoose.model('Menu', menuSchema);