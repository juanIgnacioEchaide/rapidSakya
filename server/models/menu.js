const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');

const menuSchema = new Schema({
    name: String, 
    description: String, 
    products:  [{ description: String,  price: Number, expiringDate: Date }],
    price: Number, 
})

module.exports = mongoose.model('Menu', menuSchema);