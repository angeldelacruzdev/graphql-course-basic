import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world con Graphql";
    },
    greet(root, { name }, ctx) {
      console.log(ctx);
      console.log(name);
      return `Hello ${name}`;
    },
    tasks() {
      return tasks;
    },
    async users() {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },

    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },

    async deleteUser(_, { _id }) {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },
    async updateUser(_, { _id, input }) {
      const user = await User.findByIdAndUpdate(_id, input, { new: true });
      return user;
    },
  },
};
