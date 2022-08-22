import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient,ApolloProvider,InMemoryCache}from '@apollo/client';

const client = new ApolloClient({
  uri:"https://api-ap-southeast-2.hygraph.com/v2/cl73jz45g3fc001uhh4nmesk5/master",
  cache:new InMemoryCache(),
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>

    <App />
</ApolloProvider>

);

