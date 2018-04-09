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
    getInformation: () => information,
    getWorkExperience: () => workExperience,
    getEmployments: () => employments,
    getEducations: () => educations,
    getCourses: () => courses,
    getSkill: ({ id }) => skills.filter(skill => skill.id === id)[0],
    getSkills: () => skills,
    getLanguages: () => languages
  }
};

module.exports = resolvers;
