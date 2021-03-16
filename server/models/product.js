const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    description: { type: String },
})

ProductSchema.statics.addProduct = function(id, args){
    const Product = mongoose.model('product');
    let product = new Product({
                    description: args.description
                });

    return product.save();
}


mongoose.model('product', ProductSchema);