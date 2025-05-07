export const typedefs = `#graphql
  type Course {
    id: ID!
    title: String!
    subjects: [Subject!]!  
  }

  type Subject {
    id: ID!
    name: String!
    course: Course!
    marks: [Mark!]!  
  }

  type Mark {
    id: ID!
    name: String!
    value: Int
    subject: Subject!
  }

  type Query {
    courses: [Course!]!
    course(id: ID!): Course
    subjects: [Subject!]!
    subject(id: ID!): Subject
    marks: [Mark!]!
    mark(id: ID!): Mark
  }
  type Mutation{
    addCourse(course: AddCourseInput!): Course
    deleteCourse(id:ID!): [Course]
  }
  input AddCourseInput {
    title: String!
  }
`;

export default typedefs;
