const graphql = require('graphql');
const _ = require('lodash');
const Menu = require('../models/menu');
const Product = require('../models/product'); 
const Ticket = require('../models/ticket'); 

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLFloat, 
    GraphQLID, 
    GraphQLInputObjectType,
    GraphQLList, 
    GraphQLNonNull
} = graphql;


const MenuType = new GraphQLObjectType({
    name:'Menu',
    fields: () => ({
        id: { type: GraphQLID },
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
        data: { type: GraphQLList(ProductType), 
             resolve(parentValue){   
                return Ticket.findTicketData(parentValue.id);
            }
        }
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
                author: { type: GraphQLString },
                date: { type: GraphQLString },
                type: { type: GraphQLString },
                data: { type: GraphQLList(ProductInputType) }
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
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})
