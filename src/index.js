import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./schema";


import {connect} from './database';


connect();


const app = express();

app.get("/", (req, res) => {
  return res.json({
    msg: "hello world!",
  });
});


app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
  })
);

const port = 3000;

app.listen(port, () => {
  console.log("server listen on port", port);
});
