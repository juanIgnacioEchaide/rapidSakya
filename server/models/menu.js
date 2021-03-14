const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    id: Number,
    name: String, 
    description: String, 
    price: Number,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }] 
})


menuSchema.statics.addProduct = ( menuId, id, description, price, expiringDate ) => {
    const Product = mongoose.model('Product');
    return this.findOne({id: menuId})
        .then( menu => { const product = new Product({
                                            id: id,
                                            description: description, 
                                            price: price, 
                                            expiringDate: expiringDate
                                            }); 
                         menu.products.push(product);

            return Promise.all([ product.save(), menu.save() ])
                .then(([ product, menu ]) => menu);
            });              
};

menuSchema.static.findProduct = async ( id ) => {
    const menu = await this.findOne({ id: id })
        .populate('product');
    return menu.product;
};

module.exports = mongoose.model('Menu', menuSchema);