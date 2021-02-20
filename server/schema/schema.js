const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLID, GraphQLList} = graphql;
const Menu = require('../models/menu');
const Promo = require('../models/promo');

//dummy data
/* var promos = [
    {
        id:0, 
        name:"friday kuai-le", 
        description: "es rico, sano, y blablab", 
        menues: [{menuId:0, cantidad:3},{menuId:1, cantidad:3}], 
        price: 1375.00
    },
    {
        id:1, 
        name:"hen-hao previa", 
        description: "es rico, sano, y blablab", 
        menues: [{menuId:0} ,{menuId:1}],   
        price: 1375.00
    },
    {
        id:2, 
        name:"wukong specialty  ", 
        description: "es rico, sano, y blablab",
        menues: [{menuId:0, cantidad:3},{menuId:1, cantidad:3}], 
        price: 1375.00
    },
]

var menues = [
    { id:0, menuId:0, name:"fastidharma", description: "es rico, sano, y blablab", price: 275.00 },
    { id:1, menuId:1, name:"shangri-light", description: "es rico, sano, y blablab", price: 275.00 },
    { id:2, menuId:2, name:"Yi-Huang-Da-Best", description: "es rico, sano, y blablab", price: 275.00 },
] */
//

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields:() => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }, 
        description: { type: GraphQLString }, 
        menues: { type: new GraphQLList(MenuType),
                resolve(parent, args){ 
                   /*  return menues */
            }
        },
        price: { type: GraphQLFloat }, 
    })
});

const MenuType = new GraphQLObjectType({
    name:'Menu',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat }
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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        promos:{
            type: GraphQLList(PromoType),
            resolve(parent,args){
       /*          return promos; */
                }
        }, 
        menu:{
            type: MenuType,
            args:{
                id: { type : GraphQLInt }
            },
            resolve(parent,args){
              /*   return _.find(menues, { id: args.id }) */
            }
        },
        menues:{
            type: GraphQLList(MenuType),
            resolve(parent,args){
     /*            return menues; */
            }
        },
        promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLInt }
                },
            resolve(parent,args){
               return _.find(promos, { id:args.id }) 
                }
            },
        user:{
            type: UserType,
            args:{
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                }
            }
        }
})

module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})