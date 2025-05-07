import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typedefs from './schema2.js';
import db from './db2.js';


const resolvers = {
  Query: {
    courses(){
        return db.courses
    },
    course(_,args){
        return db1.courses.find((course)=>course.id===args.id)
    },
    subjects(){
        return db.subjects
    },
    subject(_,args){
        return db.subjects.find((subject)=>subject.id===args.id)
    },
    marks(){
        return db.marks
    },
    mark(_,args){
        return db.marks.find((mark)=>mark.id===args.id)
    }
  },
  Course: {
    subjects(parent) {
       return db.subjects.filter((subject) => subject.id === parent.subject_id);
    }
  },
  Subject:{
    marks(parent){
        return db.marks.filter((m)=>m.subject_id===parent.id);
    }
  },
  Mutation: {
    addCourse(_, args) {
      const newCourse = {
        ...args.course,
        id: Math.floor(Math.random() * 1000000).toString()
      };
      db.courses.push(newCourse);
      return newCourse;
    },
    
    
  }
};

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
