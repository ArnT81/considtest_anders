import { GraphQLClient } from 'graphql-request';
require('dotenv').config()

const query = async ({ query, variables }) => {
    const endpoint = 'https://graphql.datocms.com/';
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: process.env.BEARER
        }
    })
    return client.request(query, variables);
}
export default query;