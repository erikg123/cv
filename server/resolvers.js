const {
  information,
  workExperience,
  employments,
  educations,
  courses,
  skills,
  languages
} = require('./data');

module.exports = resolvers = {
  getInformation() {
    return information;
  },

  getWorkExperience() {
    return workExperience;
  },

  getEmployments() {
    return employments;
  },

  getEducations() {
    return educations;
  },

  getCourses() {
    return courses;
  },

  getSkill({ id }) {
    return skills.filter(skill => skill.id === id)[0];
  },

  getSkills() {
    return skills;
  },

  getLanguages() {
    return languages;
  }
};
