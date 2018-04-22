import React from 'react';

import { Presentation } from './Presentation';
import { WorkExperience } from './WorkExperience';
import { Employments } from './Employments';
import { Education } from './Education';
import { Courses } from './Courses';
import { Skills } from './Skills';
import { Languages } from './Languages';
import './Content.css';

export const Content = () => {
  return (
    <>
      <Presentation />
      <WorkExperience />
      <Employments />
      <Education />
      <Courses />
      <Skills />
      <Languages />
    </>
  );
};
