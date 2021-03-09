const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInputSchema = new Schema({
    id: Number,
    description: String, 
    price: Number, 
    expiringDate: Date,
})

module.exports = mongoose.model('ProductInput', productInputSchema);