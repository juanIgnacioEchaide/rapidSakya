const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat} = graphql;
 
//dummy data
var promos=[
    {id:0, name:"fastidharma", description: "es rico, sano, y blablab", price: 250.00},
    {id:1, name:"shangri-light", description: "es rico, sano, y blablab", price: 250.00},
    {id:2, name:"Yi-Huang-Da-Best", description: "es rico, sano, y blablab", price: 250.00},
]

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields:() => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }, 
        description: { type: GraphQLString }, 
        price: { type: GraphQLFloat }, 
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
           promo:{
            type: PromoType,
            args:{ 
                id: { type: GraphQLInt }
            },
            resolve(parent,args){
                //codigo para obtener data de la db u otra fuente 
               return _.find(promos,{id:args.id}) 
            }
        } 
    }
})

module.exports = new graphql.GraphQLSchema({
    query:RootQuery
})