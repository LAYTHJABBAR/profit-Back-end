const {ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");


const MONGODB = 'mongodb+srv://laythalshareefi:087500Ll@cluster0.tmrfujn.mongodb.net/';

// Apollo Server

// typeDefs: GraphQL Type Definitions
// resolvers: Functions that run for each operation, How we resolve queries / mutations



const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
});