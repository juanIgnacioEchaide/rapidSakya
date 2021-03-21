const { ObjectID } = require('bson')
const mongoose = require('mongoose');
const product = require('./product');
const { ObjectId } = require('bson');
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
    id: Number,
    date: String, 
    author: String,
    type: String,
    data: [ Object ] ,
})

module.exports = mongoose.model('Ticket', ticketSchema);