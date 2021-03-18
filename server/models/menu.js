const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');

const menuSchema = new Schema({
    id: Number,
    name: String, 
    description: String, 
    price: Number, 
})

menuSchema.statics.addProductsToMenu = (menuId, productId) => {
    let targetMenu = this.findById(menuId);
    let product = Product.findById(productId);
    targetMenu.products.push(product);
    return Promise.all([ product.save(), menu.save()])
            .then(([product, menu]) => menu);
}

module.exports = mongoose.model('Menu', menuSchema);