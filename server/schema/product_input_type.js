const mongoose = require('mongoose');
const graphql = require('graphql');

const {
        GraphQLInputObjectType,
        GraphQLList,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        } = graphql;

const ProductInput = mongoose.model('product_input');

const ProductInputType = new GraphQLInputObjectType({
    name: 'ProductInputType',
    fields: () => ({
        id: { type: GraphQLID },
        description: { type: GraphQLString }
    })
})

module.exports = ProductInputType; 