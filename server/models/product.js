const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    description: String, 
    price: Number, 
    expiringDate: String,
})

module.exports = mongoose.model('Product', productSchema);