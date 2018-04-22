import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Information.css';

const getInformation = gql`
  {
    information {
      name
      email
      phone
      imageUrl
    }
  }
`;

export const Information = () => {
  return (
    <Query query={getInformation}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="information">
            {
              data.information.map(({ name, email, phone, imageUrl }) => {
                const image = imageUrl
                  ? imageUrl
                  : './client/assets/default-image.png';
                return (
                  <>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{phone}</p>
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
