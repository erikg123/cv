import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'normalize.css';

import { Information } from './components/Information';
import { Content } from './components/Content';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className="app-container">
      <Information />
      <Content />
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);
