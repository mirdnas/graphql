const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://127.0.0.1:27017/graphqldb'

mongoose.connect( databaseUrl , {
    useUnifiedTopology: true,
    useNewUrlParser: true
} )

const server = new GraphQLServer({
    typeDefs: path.resolve( __dirname, 'schema.graphql' ),
    //sao os controles
    resolvers
});

server.start(() => console.log('Server is running on localhost:4000'))