const {
  information,
  presentation,
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
    presentation: () => presentation,
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
