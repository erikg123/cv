import express from 'express';
import graphqlHTTP from 'express-graphql';

import { schema } from './schema';
import {
  information,
  workExperience,
  employments,
  educations,
  courses,
  skills,
  languages
} from './mockData';

const getInformation = ({ id }) => {
  return information.filter(info => info.id === id)[0];
};

const getWorkExperience = () => {
  return workExperience;
};

const getEmployments = () => {
  return employments;
};

const getEducations = () => {
  return educations;
};

const getCourses = () => {
  return courses;
};

const getSkill = ({ id }) => {
  return skills.filter(skill => skill.id === id)[0];
};

const getSkills = () => {
  return skills;
};

const getLanguages = () => {
  return languages;
};

const rootValue = {
  getInformation,
  getWorkExperience,
  getEmployments,
  getEducations,
  getCourses,
  getSkill,
  getSkills,
  getLanguages
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);
app.listen(4000);
