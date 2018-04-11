import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './WorkExperience.css';

const getWorkExperience = gql`
  {
    workExperience {
      dateRange
      title
      company
      description
      skills
    }
  }
`;

export const WorkExperience = () => {
  return (
    <Query query={getWorkExperience}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="work-experience">
            {data.workExperience.map(
              ({ dateRange, title, company, description, skills }) => {
                return (
                  <div key={title}>
                    <h2>{title}</h2>
                    <h3>{dateRange}</h3>
                    <h3>{company}</h3>
                    <p>{description}</p>
                    {skills.map(skill => <div key={skill}>{skill}</div>)}
                  </div>
                );
              }
            )}
          </div>
        );
      }}
    </Query>
  );
};
