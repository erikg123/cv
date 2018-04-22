// type Information {
//   id: ID
//   name: String
//   imageUrl: String
//   presentation: String
// }
const information = [
  {
    id: '1a',
    name: 'Erik Granbom',
    email: 'erik.granbom@gmail.com',
    phone: '0704660533',
    imageUrl: ''
  }
];

const presentation = [
  {
    id: '2a',
    text:
      'Erik is a web developer with experience in both front-end and back-end development. His main focus is front-end development and creating responsive and interactive user interfaces. He is passionate about JavaScript, meticulous and he always strives to learn himself and teach others. He believes in good structure, clean code, best practices and to always be a beginner at something. To keep up with the latest in development, he follows and listens to core contributors and influencers in the industry, and then likes to discuss with like-minded colleagues.'
  }
];

// type WorkExperience {
//   id: ID
//   dateRange: String
//   title: String
//   company: String
//   description: String
//   skills: [String]
// }
const workExperience = [
  {
    id: '3a',
    dateRange: 'Sep 2017 - Mar 2018',
    title: 'Front-end developer',
    company: 'Axis Communications',
    description:
      'Front-end lead on four different applications, mainly maintaining and adding small features to two of them and building the other two from scratch. Did one of the projects 50% of my time which also included, except for the front-end, building a REST api in Node.js.',
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'React.js',
      'Redux',
      'AngularJS',
      'Node.js',
      'MySQL',
      'Webpack',
      'gulp',
      'TypeScript',
      'Sass/LESS',
      'Jenkins',
      'Git'
    ]
  },
  {
    id: '3b',
    dateRange: 'Nov 2013 - Aug 2017',
    title: 'Full-stack developer',
    company: 'Axis Communications',
    description:
      'Started out maintaining Axis` CRM system, partner pages and writing scripts for different tasks. Ended up with building front-end applications.',
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'AngularJS',
      'PHP',
      'Perl',
      'jQuery',
      'MySQL',
      'gulp',
      'Sass/LESS',
      'Git'
    ]
  },
  {
    id: '3c',
    dateRange: 'Oct 2012 - Nov 2013',
    title: 'Web developer/student consultant',
    company: 'Axis Communications through Student Consulting',
    description:
      'As a student consultant in the web team I was adding content and building and maintaining small applications for axis.com',
    skills: ['HTML', 'CSS', 'PHP']
  }
];

// type Employment {
//   id: ID
//   dateRange: String
//   company: String
// }
const employments = [
  {
    id: '4a',
    dateRange: 'Mar 2018 - Ongoing',
    company: 'Cybercom Group AB'
  },
  {
    id: '4b',
    dateRange: 'Nov 2013 - Mar 2018',
    company: 'Axis Communications'
  },
  {
    id: '4c',
    dateRange: 'Oct 2012 - Nov 2013',
    company: 'Student Consulting'
  }
];

// type Education {
//   id: ID
//   dateRange: String
//   school: String
//   program: String
// }
const educations = [
  {
    id: '5a',
    dateRange: '2010 - 2013',
    school: 'Blekinge Institute of Technology',
    program: 'Computer Science (Bachelor)'
  }
];

// type Course {
//   id: ID
//   name: String
//   company: String
//   date: String
//   description: String
// }
const courses = [
  {
    id: '6a',
    name: 'Building Web Applications with React',
    company: 'Learning Tree International AB',
    date: '2017',
    description: `Create an isomorphic web application using Facebook React and Flux
    Compose a UI using React JavaScript and JSX components
    Integrate React forms with Ajax and back-end REST services
    Apply the Flux application pattern (dispatcher, stores, and actions)
    Exploit React animation components with CSS3 transitions`
  },
  {
    id: '6b',
    name: 'Building Web Applications with AngularJS',
    company: 'Learning Tree International AB',
    date: '2015',
    description: `Build a complete AngularJS Single Page Application (SPA)
    Craft the User Interface (UI) with templates, directives, and filters
    Code controllers with JavaScript and bind data to templates
    Develop data-bound forms to perform CRUD access
    Harness built-in services to perform REST data access`
  }
];

// type Skill {
//   id: ID
//   skill: String
//   level: Int
// }
const skills = [
  {
    id: '7a',
    skill: 'JavaScript',
    level: 4
  },
  {
    id: '7b',
    skill: 'HTML',
    level: 4
  },
  {
    id: '7c',
    skill: 'CSS',
    level: 4
  },
  {
    id: '7d',
    skill: 'React.js',
    level: 3
  },
  {
    id: '7e',
    skill: 'AngularJS',
    level: 3
  },
  {
    id: '7f',
    skill: 'Node.js',
    level: 3
  },
  {
    id: '7g',
    skill: 'Git',
    level: 3
  },
  {
    id: '7h',
    skill: 'Redux',
    level: 2
  },
  {
    id: '7i',
    skill: 'Webpack',
    level: 2
  },
  {
    id: '7j',
    skill: 'Jenkins',
    level: 2
  },
  {
    id: '7k',
    skill: 'TypeScript',
    level: 2
  },
  {
    id: '7l',
    skill: 'Gulp',
    level: 2
  }
];

// type Language {
//   id: ID
//   language: String
//   level: String
// }
const languages = [
  {
    id: '8a',
    language: 'Swedish',
    level: 'Native or bilingual proficiency'
  },
  {
    id: '8b',
    language: 'English',
    level: 'Full professional proficiency'
  }
];
module.exports = {
  information,
  presentation,
  workExperience,
  employments,
  educations,
  courses,
  skills,
  languages
};
