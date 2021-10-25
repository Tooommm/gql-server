var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

// GraphQL schema
var schema = buildSchema(`
type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
},
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
}
`);

// Root resolver
var root = {
  message: () => "Hello World!",
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
