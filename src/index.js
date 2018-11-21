import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
//import { setContext } from 'apollo-link-context'
import gql from 'graphql-tag'

import App from './App'

const httpLink = new HttpLink({ uri: 'http://localhost:19090/api/' })

/*const authLink = setContext((_, { headers }) => {
    const token = '**Token Here***'

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


const USERS_LIST = gql`
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

client.query({ query: USERS_LIST }).then(console.log)

