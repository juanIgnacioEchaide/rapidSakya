const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    products: [{ 
                type: Schema.Types.ObjectId,
                ref: 'product'
                }],
})

MenuSchema.statics.addProductToMenu = function(id, args){
    const Product = mongoose.model('product');
    
    return this.findById(id)
            .then(menu => {
                    const product = new Product({args, menu})
                    menu.products.push(product)
                        return Promise.all([ menu.save(), product.save()])
                            .then( ([menu, product]) => menu ); 
            })
}

mongoose.model('menu', MenuSchema);