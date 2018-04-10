import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'normalize.css';

import { Header } from './components/Header';
import { WorkExperience } from './components/WorkExperience';
import { Employments } from './components/Employments';
import { Education } from './components/Education';
import { Courses } from './components/Courses';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className="app-container">
      <Header />
      <WorkExperience />
      <Employments />
      <Education />
      <Courses />
      <Skills />
      <Languages />
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);
