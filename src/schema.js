import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers";

const typeDefs =`
    type Query {
        hello: String
        greet(name: String!) : String
        tasks: [Tasks]
        users: [Users]
    }

    type Tasks{
        _id: ID
        title: String!
        number: Int!
    }

    type Users{
        _id: ID,
        firstname: String
        lastname: String
        age: Int!
    }
 

    type Mutation {
        createTask(input: TaskInput): Tasks
        createUser(input: UserInput): Users
        deleteUser(_id: ID): Users
        updateUser(_id: ID, input: UserInput): Users
    }

    input UserInput{
        firstname: String
        lastname: String
        age: Int!
    }

    input TaskInput {
        title: String!
        number: Int!
    }
    
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
