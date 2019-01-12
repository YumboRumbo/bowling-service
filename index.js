import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { dbuser, dbpass } from "./config/config";
import schema from "./graphql/schema"

const app = express();
const port = process.env.PORT || 4000;
const db = `mongodb://${dbuser}:${dbpass}@ds151814.mlab.com:51814/bowling-service`;

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
