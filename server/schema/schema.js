const graphql = require('graphql');
const _ = require('lodash');
const Menu = require('../models/menu');
const Promo = require('../models/promo');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat, 
    GraphQLID, 
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
                   return Menu.findById(parent.id)
            }
        },
        price: { type: GraphQLFloat }, 
    })
});

const MenuType = new GraphQLObjectType({
    name:'Menu',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        price: { type: GraphQLNonNull(GraphQLFloat) }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        username: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    })
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addMenu:{
            type: MenuType,
            args:{
                id: { type: GraphQLID},
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLFloat }
            }, 
            resolve(parent, args){
                let menu = new Menu({
                    id: args.id,
                    name: args.name,
                    description: args.description,
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
        promos:{
            type: GraphQLList(PromoType),
            resolve(parent,args){
                Promo.find({});
                }
        }, 
        menu:{
            type: MenuType,
            args:{
                id: { type : GraphQLInt }
            },
            resolve(parent,args){
                Menu.findById(args.id)
            }
        },
        menues:{
            type: GraphQLList(MenuType),
            resolve(parent,args){
                Menu.find({});
            }
        },
        promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLInt }
                },
            resolve(parent,args){
                Promo.findById(args.id)
                }
            },
        user:{
            type: UserType,
            args:{
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                },
            resolve(parent,args){
                User.find({username: args.username,password:args.password});
                }
            }
        }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})