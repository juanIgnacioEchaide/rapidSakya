const mongoose = require('mongoose');
const graphql = require('graphql');
const ProductType = require('./product_type');

const {
        GraphQLObjectType,
        GraphQLID,
        GraphQLList,
        GraphQLString,
        GraphQLInt
        } = graphql;

const Menu = mongoose.model('menu');

const MenuType = new GraphQLObjectType({
    name ='MenuType',
    fields: () => ({
        id:{ type: GraphQLID },
        products:{ type: new GraphQLList(ProductType),
            resolve(parentValue){
                return Menu.findMenusProducts(parentValue.id);
            }
        }
    })
})


        