import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Education.css';

const getEducations = gql`
  {
    educations {
      dateRange
      school
      program
    }
  }
`;

export const Education = () => {
  return (
    <Query query={getEducations}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="education">
            {data.educations.map(({ dateRange, school, program }) => {
              return (
                <div key={program}>
                  <h2>{school}</h2>
                  <h3>{program}</h3>
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
