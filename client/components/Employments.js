import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Employments.css';

const getEmployments = gql`
  {
    employments {
      dateRange
      company
    }
  }
`;

export const Employments = () => {
  return (
    <Query query={getEmployments}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="employments">
            {data.employments.map(({ dateRange, company }) => {
              return (
                <div key={company}>
                  <h3>{company}</h3>
                  <h3>{dateRange}</h3>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
