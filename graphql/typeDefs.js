const { gql } = require("apollo-server");

module.exports = gql`
  type Dashboard {
    ID: Int!
    Address: String!
    Street: String!
    City: String!
    State: String!
    postalCodeFSA: String!
    postalCodeNAN: String!
    completedJobs: Int!
    completedRevenue: String!
  }
  type Query {
    getPagDashboards(page: Int, filterBy: String, sortBy: String): [Dashboard!]!
    getAllDashboards(filterBy: String): [Dashboard!]!
  }
`;
