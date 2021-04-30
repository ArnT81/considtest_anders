import { GraphQLClient } from 'graphql-request';

const query = async ({ query, variables }) => {
    const endpoint = 'https://graphql.datocms.com/';
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: 'Bearer 80d0d8c324a8255230888006fead97'
        }
    })
    return client.request(query, variables);
}
export default query;