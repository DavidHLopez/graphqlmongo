const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    quote: String
    author: String
  }

  type Query {
    hello: String
    getAllTasks: [Task]
    getTask(id: ID): Task
  }

  input TaskInput {
    quote: String
    author: String
  }

  type Mutation {
    createTask(task: TaskInput): Task
    deleteTask(id: ID): String
    updateTask(id: ID, task: TaskInput): Task
  }
`;

module.exports = {
  typeDefs,
};
