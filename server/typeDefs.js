const typeDefs = `
type Query {
  information: [Information]
  workExperience: [WorkExperience]
  employments: [Employment]
  educations: [Education]
  courses: [Course]
  skill(id: ID): Skill
  skills: [Skill]
  languages: [Language]
}

type Information {
  id: ID
  name: String
  imageUrl: String
  presentation: String
}

type WorkExperience {
  id: ID
  dateRange: String
  title: String
  company: String
  description: String
  skills: [String]
}

type Employment {
  id: ID
  dateRange: String
  company: String
}

type Education {
  id: ID
  dateRange: String
  school: String
  program: String
}

type Course {
  id: ID
  name: String
  company: String
  date: String
  description: String
}

type Skill {
  id: ID
  skill: String
  level: Int
}

type Language {
  id: ID
  language: String
  level: String
}
`;

module.exports = typeDefs;
