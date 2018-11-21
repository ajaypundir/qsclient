import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

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

const App = graphql(USERS_LIST)(props =>
    <ul>
        {props.data.loading ? '' : props.data.allUsers.map((row, i) =>
            <li key={row.id + '-' + row.name}>
                {row.id} / {row.name} / {row.age} / {row.address}

            </li>
        )}
    </ul>
)

export default App