//4. npm i massive, dotenv, express-session
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
//2.
const app = express();
//1. npm i express
//dotenv - environment variables (sensitive information)

//5. set up .env // set up massive
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => {
    console.log(err);
  });

//sessions lead to persistent data and give unique experience to users
//.6
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    //.7hashing and salting to make it hard for users to read
    //8. session time
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

//3.
app.listen(5050, () => console.log("listening on port 5050"));
