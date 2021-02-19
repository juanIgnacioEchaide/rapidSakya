const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLID} = graphql;
 
//dummy data
var promos = [
    {
        id:0, 
        name:"friday kuai-le", 
        description: "es rico, sano, y blablab", 
        menuId: 0, 
        price: 1375.00
    },
    {
        id:1, 
        name:"hen-hao previa", 
        description: "es rico, sano, y blablab", 
        menuId: 1,   
        price: 1375.00
    },
    {
        id:2, 
        name:"wukong knows", 
        description: "es rico, sano, y blablab",
        menuId: 2, 
        price: 1375.00
    },
]

var menues = [
    { id:0, name:"fastidharma", description: "es rico, sano, y blablab", price: 275.00 },
    { id:1, name:"shangri-light", description: "es rico, sano, y blablab", price: 275.00 },
    { id:2, name:"Yi-Huang-Da-Best", description: "es rico, sano, y blablab", price: 275.00 },
]
//

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields:() => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }, 
        description: { type: GraphQLString }, 
        menu: { type: MenuType,
                resolve(parent, args){
                    return _.find(menues, {id: parent.menuId})
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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
            menu:{
            type: MenuType,
            args:{
                id: { type : GraphQLInt }
            },
            resolve(parent,args){
                return _.find(menues, { id: args.id })
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
        } 
    }
})

module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})