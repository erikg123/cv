import {
  information,
  workExperience,
  employments,
  educations,
  courses,
  skills,
  languages
} from './data';

export const resolvers = {
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
