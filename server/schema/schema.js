const graphql = require('graphql');
const _ = require('lodash');
const Menu = require('../models/menu');
const Promo = require('../models/promo');
const Product = require('../models/product'); 
const Ticket = require('../models/ticket'); 
const { Timestamp } = require('bson');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLInt, 
    GraphQLInputObjectType,
    GraphQLList, 
    GraphQLNonNull
} = graphql;

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields:() => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }, 
        description: { type: GraphQLString }, 
        menues: { type: new GraphQLList(MenuType),
                resolve(parent, args){ 
                   return Menu.findOne({id: parent.menuId})
            }
        },
        price: { type: GraphQLFloat }, 
    })
});

const MenuType = new GraphQLObjectType({
    name:'Menu',
    fields: () => ({
        id: { type: GraphQLInt },
        products:{ type: new GraphQLList(ProductType),
                resolve(parent, args){ 
                   return Menu.findOne({id: parent.productId})
            }
        },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
    })
})

const MenuInputType = new GraphQLInputObjectType({
    name:'MenuInput',
    fields: () => ({
        id: { type: GraphQLInt },
        products:{ type: new GraphQLList(ProductInputType)},
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
    })
})


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

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
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const TicketType = new GraphQLObjectType({
    name: 'Ticket',
    fields: ()=>({
        id: { type: GraphQLInt},
        author: { type: GraphQLString },
        date: { type: GraphQLString },
        type: { type: GraphQLString },
        data: { type: GraphQLList(ProductType) }
    })
})

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        id: { type: GraphQLInt },
        products: { type: new GraphQLList(ProductType)/* , 
                    resolve(parent, args){
                        return Product.find({id: parent.productId})
                    } */},
        total: { type: GraphQLFloat },
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
        addTicket:{
           type:  TicketType,
           args: {
                id: { type: GraphQLInt},
                author: { type: GraphQLString },
                date: { type: GraphQLString },
                type: { type: GraphQLString },
                data: { type: GraphQLList(ProductInputType) }
           },
           resolve(parent, args){
               let ticket = new Ticket({
                id: args.id,
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
                id: { type: GraphQLInt},
                name: { type: GraphQLString },
                products: { type: GraphQLList(ProductInputType) },
                price: { type: GraphQLFloat }
            }, 
            resolve(parent, args){
                let menu = new Menu({
                    id: args.id,
                    name: args.name,
                    products: args.products,
                    price: args.price
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
                id: { type: GraphQLInt }
                },
            resolve(parent,args){
                return Product.findOne({id: args.id})
                }
        },
        products:{
            type: GraphQLList(ProductType),
            resolve(parent,args){
               return Product.find({});
                }
        },
        tickets:{
            type: TicketType,
            resolve(parent,args){
                return Product.find({});
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})
