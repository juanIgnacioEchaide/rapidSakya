const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product.js')

const orderSchema = new Schema({
    id: Number,
    products:  [ Product ],
    price: Number, 
})

module.exports = mongoose.model('Order', menuSchema);