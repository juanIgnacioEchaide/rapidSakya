const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    date: String, 
    author: String,
    type: String,
    data: { 
        type: Schema.Types.Mixed
    },
})

ticketSchema.statics.findTicketData = function(id){
    return this.findById(id).populate('data').then(ticket => ticket.data);
}


module.exports = mongoose.model('Ticket', ticketSchema);