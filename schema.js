export const typedefs = `#graphql
  type Courses {
    id: ID
    title: String
  }

  type Subject {
    id: ID
    name: String
  }

  type Marks {
    id: ID
    name: String
  }

  type Query {
    courses: [Courses]
    subject: [Subject]
    Marks: [Marks]
  }
`;


export default typedefs;
