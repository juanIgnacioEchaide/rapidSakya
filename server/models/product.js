const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: ObjectId,
    description: String, 
    price: Number, 
    expiringDate: Date,
})

module.exports = mongoose.model('Product', productSchema);