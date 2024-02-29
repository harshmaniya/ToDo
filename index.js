import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import mongoConnection from './db.js'

import typeDefs from './graphQL/todoType.js'
import resolvers from './graphQL/todoResolver.js'

const app = express();
app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ]
});

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
}

startServer().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}/graphql`);
    });
});

mongoConnection();