const graphql = require('graphql');
const _ = require('lodash');
const Product = require('../models/product');
const Menu = require('../models/menu');
const { ObjectId } = require('bson');


const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLInt, 
    GraphQLInputObjectType,
    GraphQLList, 
    GraphQLNonNull
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLInt },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const ProductInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: () => ({
        id: { type: GraphQLInt },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        products: {type: GraphQLList(ProductType)}
    })
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addProduct:{
            type: ProductType,
            args: {
                id: { type: GraphQLInt},
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                expiringDate: { type: GraphQLString }
            },
            resolve(parent, args){
                let product = new Product({
                    id: args.id,
                    description: args.description,
                    price: args.price,
                    expiringDate: args.expiringDate
                });
                return product.save();
            }
        },
        addMenu:{
            type: MenuType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat }, 
                products: {type: GraphQLList(ProductInputType) }
            },
            resolve(parent, args){
                let menu = new Menu({
                    id: args.id,
                    description: args.description,
                    name: args.description,
                    price: args.price
                });
                return menu.save();
            }
        },
        addProductToMenu:{
            type: MenuType,
            args: {
                menuId: { type: GraphQLInt},
                productId: { type: GraphQLInt},
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                expiringDate: { type: GraphQLString }
            },
            resolve(parent, args){
                return Menu.addProduct(
                    args.menuId, 
                    args.productId, 
                    args.description, 
                    args.price, 
                    args.expiringDate
                    );
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        products:{
            type: new GraphQLList(ProductType),
            resolve(parent,args){
                return Product.find({});
            }
        },
        product:{
            type: ProductType,
            args:{ 
                id: { type: GraphQLInt }
                },
            resolve(parent,args){
                return Product.findOne({id: args.id})
                }
        },
        menues:{
            type: new GraphQLList(MenuType),
            resolve(parent,args){
                return Menu.find({});
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})
