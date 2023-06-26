import "reflect-metadata"
import path from "path"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { AppointmentsResolver } from "./resolvers/appointments-resolver"

async function main() {

    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await server.listen()

    console.log(`HTTP server on ${url}`)
}

main()