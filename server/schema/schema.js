const graphql = require('graphql');
const _ = require('lodash');
const Menu = require('../models/menu');
const Product = require('../models/product'); 
const Ticket = require('../models/ticket'); 
const Promo = require('../models/promo'); 
const { Mongoose } = require('mongoose');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLID, 
    GraphQLInputObjectType,
    GraphQLList, 
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const MenuType = new GraphQLObjectType({
    name:'Menu',
    fields: () => ({
        id: { type: GraphQLID },
        products:{ type: new GraphQLList(ProductType) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
    })
})

const MenuInputType = new GraphQLInputObjectType({
    name:'MenuInput',
    fields: () => ({
        id: { type: GraphQLID },
        products:{ type: new GraphQLList(ProductInputType) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const ProductInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: () => ({
        id: { type: GraphQLID },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const TicketType = new GraphQLObjectType({
    name: 'Ticket',
    fields: ()=>({
        id: { type: GraphQLID},
        author: { type: GraphQLString },
        date: { type: GraphQLString },
        type: { type: GraphQLString },
        data: { type: GraphQLString }
    })
})

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields: ()=>({  
        id: { type: GraphQLID},
        name: { type: GraphQLString },
        menues: { type: GraphQLList(MenuType)},
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        discount: { type: GraphQLInt },
        expirationDate: { type: GraphQLString },
    })
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addProduct:{
            type: ProductType,
            args: {
                description: { type: GraphQLString },
                price: { type: GraphQLFloat },
                expiringDate: { type: GraphQLString }
            },
            resolve(parent, args){
                let product = new Product({
                    description: args.description,
                    price: args.price,
                    expiringDate: args.expiringDate
                });
                return product.save();
            }
        },
        addTicket:{
           type:  TicketType,
           args: {
                customer: { type: GraphQLString },
                date: { type: GraphQLString },
                paymentType: { type: GraphQLString },
                data: { type: GraphQLList(ProductInputType) },
           },
           resolve(parent, args){
               let ticket = new Ticket({
                    author: args.author,
                    type: args.type,
                    date: args.date,
                    data: args.data
                });
                return ticket.save();
           }
        },
        addMenu:{
            type: MenuType,
            args:{
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                products: { type: GraphQLList(ProductInputType) },
                price: { type: GraphQLFloat }
            }, 
            resolve(parent, args){
                let menu = new Menu({
                    name: args.name,
                    description: args.description,
                    products: args.products,
                    price: args.price
                });
                return menu.save();
            }
        },
        addPromo: {
            type: PromoType,
            args: {
                name: { type: GraphQLString },
                menues: { type: GraphQLList(MenuInputType)},
                description: { type: GraphQLString },
                discount: { type: GraphQLInt },
                expirationDate: { type: GraphQLString },
            }, 
            resolve(parent, args){
                let menu = new Menu({
                    name: args.name,
                    description: args.description,
                    products: args.products,
                    price: args.price,
                    discount: args.discount,
                    expirationDate: args.expirationDate,
                });
                return menu.save();
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        product:{
            type: ProductType,
            args:{ 
                id: { type: GraphQLID }
                },
            resolve(parent,args){
                return Product.finById(id)
                }
        },
        menu:{
            type: MenuType,
            args:{ 
                id: { type: GraphQLID }
                },
            resolve(parent,args){
                return Menu.finById(id)
                }
        },
        promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLID }
                },
            resolve(parent,args){
                return Promo.finById(id)
                }
        },
        promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLID }
                },
            resolve(parent,args){
                return Promo.finById(id)
                }
        },
        products:{
            type: GraphQLList(ProductType),
            resolve(parent,args){
               return Product.find({});
                }
        },
        tickets:{
            type:  GraphQLList(TicketType),
            resolve(parent,args){
                return Ticket.find({});
            }
        },
        menues:{
            type: GraphQLList(MenuType),
            resolve(parent, args){
                return Menu.find({});
            }
        },
        promos:{
            type: GraphQLList(PromoType),
            resolve(parent, args){
                return Promo.find({});
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})
