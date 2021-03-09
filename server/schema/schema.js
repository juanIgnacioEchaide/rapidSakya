const graphql = require('graphql');
const _ = require('lodash');
const Product = require('../models/product');


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

const MenuType = new GraphQLInputObjectType({
    name: 'Menu',
    fields: () => ({
        id: { type: GraphQLInt },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        products: {type: GraphQLList(ProductInputType)}
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
                description: { type: GraphQLString },
                price: { type: GraphQLFloat }, 
                menues: {type: GraphQLList(ProductType) }
            },
            resolve(parent, args){
                let product = new Menu({
                    id: args.id,
                    description: args.description,
                    price: args.price,
                    products: args.products
                });
                return menu.save();
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
