const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuInputSchema = new Schema({
    id: Number,
    name: String, 
    description: String, 
    price: Number, 
})

module.exports = mongoose.model('MenuInput', menuInputSchema);