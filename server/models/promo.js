const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    name: String, 
    menues: [{ id: Number,
                name: String, 
                description: String, 
                products:  [{ description: String,  price: Number, expiringDate: Date }],
                price: Number }],
    description: String, 
    discount: Number,
    expirationDate: String,
    price: Number, 
})

module.exports = mongoose.model('Promo', promoSchema);