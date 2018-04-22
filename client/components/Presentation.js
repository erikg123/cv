import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Presentation.css';

const getInformation = gql`
  {
    presentation {
      text
    }
  }
`;

export const Presentation = () => {
  return (
    <Query query={getInformation}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="presentation">
            {
              data.presentation.map(({ text }) => {
                return (
                  <>
                    <p>{text}</p>
                  </>
                );
              })[0]
            }
          </div>
        );
      }}
    </Query>
  );
};
