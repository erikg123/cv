const {
  information,
  workExperience,
  employments,
  educations,
  courses,
  skills,
  languages
} = require('./data');

const resolvers = {
  Query: {
    information: () => information,
    workExperience: () => workExperience,
    employments: () => employments,
    educations: () => educations,
    courses: () => courses,
    skill: ({ id }) => skills.filter(skill => skill.id === id)[0],
    skills: () => skills,
    languages: () => languages
  }
};

module.exports = resolvers;
