const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: Number,
    products:  [{ description: String,  price: Number, expiringDate: Date }],
    price: Number, 
})

module.exports = mongoose.model('Order', menuSchema);