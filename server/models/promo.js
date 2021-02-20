const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    id: Number,
    name: String, 
    menues: [Schema.Types.ObjectId],
    description: String, 
    price: Number, 
})

module.exports = mongoose.model('Promo', promoSchema);