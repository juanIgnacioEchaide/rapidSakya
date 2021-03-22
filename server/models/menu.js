const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');

const menuSchema = new Schema({
    id: Number,
    name: String, 
    description: String, 
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }] ,
    price: Number, 
})

module.exports = mongoose.model('Menu', menuSchema);