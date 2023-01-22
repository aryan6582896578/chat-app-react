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

console.log("Trying to find...");

app.use(cors());
// Create a Token for New Users
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

app.use("/createtoken", (req, res) => {
  const token = rand();
  res.send({
    token,
  });
});
app.use("/receivelogindata", (req, res) => {
var received_data = req.body;
if (received_data.username && received_data.password) {  // check in json if there is a key with name username and password
  username_received_length = received_data.username.length ; 
  password_received_length = received_data.password.length ;
    if (username_received_length <= 0 && password_received_length <= 0 ) { // checking if username and password are empty
        console.log("Someone is sending empty data")
        response = { Server: "Hey Thats A Empty Data" };
        res.send(response);
      }else{
        User.findOne({ username: received_data.username }, function (err, docs) { // checking if there is a username in database
          if (docs == null) {
          console.log("user not found")
          response = { Database: "user not found" };
          res.send(response);
          } else {
            User.findOne({ username: received_data.username,password: received_data.password }, function (err, docs) { // if there is a user in database then mathcing password and username
              if (docs != null) {
              console.log("Valid User");
              response = { status: "Access-Approved" };
              res.send(response);
              } else {   
                console.log("Invalid Password")
                response = { status: "Access-denied" };
                res.send(response);
              }
            })
          }
        })
      }
}else{
  response = { Server: "Invalid Format" };
  res.send(response);
}

});
app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);