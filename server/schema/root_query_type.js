const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const MenuType = require('./menu_type');
const ProductType = require('./product_type');
const Menu = mongoose.model('menu');
const Product = mongoose.model('product');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        menu:{
           type: MenuType,
           args: { id:{ type:{ GraphQLNonNull(GraphQLID)}} },
           resolve(parentValue){
               return Menu.findById(id);
           }
        },
        menues:{
            type: new GraphQLList(MenuType),
            resolve(parentValue){
                return Menu.find({});
            }
        },
        product:{
            type: ProductType,
            args: { id:{ type:{ GraphQLNonNull(GraphQLID)}} },
            resolve(parentValue){
                return Product.findById(id);
            }
        },
        products:{
            type: new GraphQLList(ProductType),
            resolve(parentValue){
                return Product.find({});
            }
        },
    })
});

module.exports = RootQuery;
