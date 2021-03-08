const graphql = require('graphql');
const _ = require('lodash');
const Menu = require('../models/menu');
const Promo = require('../models/promo');
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
        id: { type: GraphQLInt },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }, 
        expiringDate: { type: GraphQLString }
    })
});

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        id: { type: GraphQLInt },
        products: { type: new GraphQLList(ProductType), 
                    resolve(parent, args){
                        return Product.find({id: parent.productId})
                    }},
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
        },
        addPromo:{
            type: PromoType,
            args:{
                id: { type: GraphQLInt},
                name: { type: GraphQLString },
                menues: { type: GraphQLList(MenuInputType)},
                description: { type: GraphQLString },
                price: { type: GraphQLFloat }
            }, 
            resolve(parent, args){
                let menu = new Promo({
                    id: args.id,
                    name: args.name,
                    description: args.description,
                    menues: args.menues,
                    price: args.price
                });
                return promo.save();
            }
        },
        addOrder:{
            type: OrderType,
            args:{
                id: { type: GraphQLInt},
                products: { type: GraphQLList(ProductInputType)},
                price: { type: GraphQLFloat }
            }, 
            resolve(parent, args){
                let order = new Order({
                    id: args.id,
                    name: args.name,
                    description: args.description,
                    price: args.price
                });
                return order.save();
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
        promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLInt }
                },
            resolve(parent,args){
                return Promo.findOne({id: args.id})
                }
        },
        promos:{
            type: GraphQLList(PromoType),
            resolve(parent,args){
               return Promo.find({});
                }
        }, 
        menu:{
            type: MenuType,
            args:{
                id: { type : GraphQLInt }
            },
            resolve(parent,args){
                return Menu.findOne({id: args.id})
            }
        },
        menues:{
            type: GraphQLList(MenuType),
            resolve(parent,args){
                return Menu.find({});
            }
        },
       
        user:{
            type: UserType,
            args:{
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                },
            resolve(parent,args){
                return User.find({username: args.username,password:args.password});
                }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    mutation: Mutation,
    query:RootQuery
})
