import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typedefs from './schema1.js';
import * as db1 from './db1.js';


const resolvers = {
  Query: {
    courses(){
        return db1.courses
    },
    course(_,args){
        return db1.courses.find((course)=>course.id===args.id)
    },
    subjects(){
        return db1.subjects
    },
    subject(_,args){
        return db1.subjects.find((subject)=>subject.id===args.id)
    },
    marks(){
        return db1.marks
    },
    mark(_,args){
        return db1.marks.find((mark)=>mark.id===args.id)
    }
    
  },
  Course: {
    subjects(parent) {
       return db1.subjects.filter((subject) => subject.id === parent.subject_id);
    }
  },
  Subject:{
    marks(parent){
        return db1.marks.filter((m)=>m.subject_id===parent.id);
    }
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
