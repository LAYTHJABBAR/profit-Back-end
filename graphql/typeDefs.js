const { gql } = require("apollo-server");

module.exports = gql`
  type Boat {
    id: ID!
    guideName: String!
    boatName: String!
    swimlaneID: Int!
  }
  type boatInput {
    swimlaneID: Int!
  }
  type Guide {
    id: ID!
    guideName: String!
  }
  type Query {
    boat(ID: ID!): Boat
    guide(ID: ID!): Guide
    getBoats: [Boat]
    getGuides: [Guide]
  }
  type Mutation {
    addBoat(guideName: String!, boatName: String!, swimlaneID: Int!): Boat!
    addGuide(guideName: String!): Guide!
    deleteBoat(ID: ID!): Boolean!
    deleteGuide(ID: ID!): Boolean!
    editBoat(ID: ID!, swimlaneID: Int!): Boolean!
  }
`;
