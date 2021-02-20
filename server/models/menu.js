const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    id: Number,
    name: String, 
    menuId: Number,
    description: String, 
    price: Number, 
})

module.exports = mongoose.model('Menu', menuSchema);