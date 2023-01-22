const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
/* global localStorage, */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://tbot:tbot1738@cluster0.dn1av.mongodb.net/");

const credentials = new mongoose.Schema({
  username: String,
  password: String,
  tk: String,
});
var User = mongoose.model("User", credentials);

app.use(cors());
// Create a Token for New Users
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

app.use("/login", (req, res) => {
  const token = rand();
  res.send({
    token,
  });
});

app.post("/post", (req, res) => {
  var myData = new User(req.body);

  User.findOne(
    { username: myData.username, password: myData.password },
    function (err, docs) {
      try {
        if (docs.username != undefined) {
          console.log(docs);

          console.log("Username and Password Matched.");
          response = { status: "yes" };
          res.send(response);
          return;
        } else {
          console.log(docs);
          response = { status: "no" };
          res.send(response);
          return;
        }
      } catch (err) {
        if (err instanceof TypeError) {
          console.log("No accounts found");
        }
      }
    }
  );
});

app.use("/name", (req, res) => {
  const token = req.body.tk;
  User.findOne({ tk: token }, { username: 1 }, function (err, docs) {
    if (err) {
      res.send({
        status: "Error",
        name: err,
      });
      return;
    }
    if (docs) {
      res.send({
        status: "Success",
        name: docs.username,
      });
    } else {
      res.send({
        status: "Error",
        name: "No username found for the provided token",
      });
    }
  });
});
app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
