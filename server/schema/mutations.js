const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const MenuType = require('./menu_type');
const ProductType = require('./product_type');
const Menu = mongoose.model('menu');
const Product = mongoose.model('product');

const mutation = new GraphQLObjectType({
    fields:{
        addProduct: {
            type: ProductType,
            args: {},
            resolve(){
                return Product.addProduct()
            }
        },
        addMenu: {
            type: MenuType,
            args: {},
            resolve(){

            }
        },
        addProductToMenu: {
            type: MenuType,
            args: {},
            resolve(){
                
            }
        }
    }
});

module.exports = mutation;