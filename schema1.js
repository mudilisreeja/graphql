export const typedefs = `#graphql
  type Course {
    id: ID
    title: String
  }

  type Subject {
    id: ID
    name: String
  }

  type Mark {
    id: ID
    name: String
  }

  type Query {
    courses: [Course]
    course(id: ID!): Course
    subjects: [Subject]
    subject(id: ID!): Subject
    marks: [Mark]
    mark(id: ID!): Mark
  }
`;

export default typedefs;
