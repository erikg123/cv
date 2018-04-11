import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Header.css';

const getInformation = gql`
  {
    information {
      name
      imageUrl
      presentation
    }
  }
`;

export const Header = () => {
  return (
    <Query query={getInformation}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="header">
            {
              data.information.map(({ name, imageUrl, presentation }) => {
                const image = imageUrl
                  ? imageUrl
                  : './client/assets/default-image.png';
                return (
                  <>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{presentation}</p>
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
