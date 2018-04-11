import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Courses.css';

const getCourses = gql`
  {
    courses {
      name
      company
      date
      description
    }
  }
`;

export const Courses = () => {
  return (
    <Query query={getCourses}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="courses">
            {data.courses.map(({ name, company, date, description }) => {
              return (
                <div key={name}>
                  <h2>{name}</h2>
                  <h3>{company}</h3>
                  <h3>{date}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
