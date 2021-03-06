## qsclient
It is a demo apollo client for GraphQL. We have used below mentioned steps to create skeleton for this project:
1. `npx create-react-app qsclient`
  to setup the React app
2. `yarn start`
  start the app local server with yarn
3. `yarn add apollo-boost react-apollo graphql`
   Apollo Boost dependency for graphQL client

## Terminology
1. `ApolloClient` used to intialize apollo client 
2. `Apollo Link` provides us a way to describe how we want to get the result of a GraphQL operation, and what we want to do   with the response.
3. `InMemoryCache` is used for caching.
4. `ApolloProvider`is used to connect the Apollo Client to our component tree.
5. `graphql-tag` is the template to query the data.



## Local Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:
### `npm install`
to download all the depenedencies for the project
### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assumptions/Dependency
This client is dependant on the graphQL server. 
http://localhost:19090/api/. 

```
GraphQL Server Link mentioned at `src\index.js`
const httpLink = new HttpLink({ uri: 'http://localhost:19090/api/' })
```
We have to host GraphQL server by running github repo:
https://github.com/bisht-jitendra/graphql-poc
