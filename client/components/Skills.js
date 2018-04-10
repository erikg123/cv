import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './Skills.css';

const getSkills = gql`
  {
    skills {
      skill
      level
    }
  }
`;

export const Skills = () => {
  return (
    <Query query={getSkills}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="skills">
            {data.skills.map(({ skill, level }) => {
              return (
                <div key={skill}>
                  <h3>{skill}</h3>
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
