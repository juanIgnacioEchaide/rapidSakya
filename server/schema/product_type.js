const mongoose = require('mongoose');
const graphql = require('graphql');

const {
        GraphQLObjectType,
        GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        } = graphql;

const Product = mongoose.model('product');

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        id: { type: GraphQLID },
        description: { type: GraphQLString }
    })
})

module.exports = ProductType; 