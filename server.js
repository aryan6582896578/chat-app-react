const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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

const saveuserdata = new mongoose.Schema({
  Username: String,
  Password: String,
  User_token: String,
});

app.use(cors());// Create a Token for New Users
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

  if (Object.keys(req.body).length === 0) {
    console.log("empty data")
 }else{
  var myData = new User(req.body);
  console.log(User(req.body));
  myData
    .save()
    .then((item) => {
      res.send(item);
      console.log(item);
      console.log("worked");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  }
});






app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
