import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Languages.css';

const getLanguages = gql`
  {
    languages {
      language
      level
    }
  }
`;

export const Languages = () => {
  return (
    <Query query={getLanguages}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="languages">
            {data.languages.map(({ language, level }) => {
              return (
                <div key={language}>
                  <h3>{language}</h3>
                  <h3>{level}</h3>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
