const graphql = require('graphql');

const { GraphQLObjectType } = graphql;
 
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: graphql.GraphQLInt },
        firstName: { type: graphql.GraphQLString },
        age: { type: graphql.GraphQLInt}
    })
}); 

const PromoType = new GraphQLObjectType({
    name: 'Promo',
    fields: () => ({
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        price: { type: graphql.GraphQLFloat},
        validUntil: {type: graphql.GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args: {id: {type: graphql.GraphQLString} },
            resolve(parent,args){
                //codigo para obtener data de la db u otra fuente 
            }
        }
    }
})