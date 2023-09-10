const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB = process.env.DATABASE_URL;

// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: Functions that run for each operation, How we resolve queries / mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const port = 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: process.env.port || port });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
