import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
//import { setContext } from 'apollo-link-context'
import gql from 'graphql-tag'

import App from './App'

const httpLink = new HttpLink({ uri: 'http://10.220.4.139:19090/api/' })

/*const authLink = setContext((_, { headers }) => {
    const token = '293d69f054db52a770dfd25a2eee998e8ad06989'

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }
})*/

//const link = authLink.concat(httpLink)

const link = httpLink

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)


const POPULAR_REPOSITORIES_LIST = gql`
{
  allUsers(offset:0, limit:10) {
    id,
    name,
    age,
    address,
    createdAt
  }
}
`

client.query({ query: POPULAR_REPOSITORIES_LIST }).then(console.log)

