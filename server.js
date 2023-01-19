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

app.use("/login", (req, res) => {
  const token = rand();
  res.send({
    token,
  });
});
// app.use("/post", (req, res) => {
//   var myData = new User(req.body);
//   // console.log(User(req.body));
//   User.findOne({ username: myData.username }, function (err, docs) {
//     if (docs == null) {
//       // console.log(err, docs);
//       // myData
//       //   .save()
//       //   .then((item) => {
//       //     res.send(item);
//       //     console.log(item);
//       //     // console.log("worked");
//       //   })
//       //   .catch((err) => {
//       //     res.status(400).send(err);
//       //   });
//       console.log("Username did not match");
//       response = { status: "no" };
//       res.send(response);
//       return;
//     } else if (docs != null) {
//       User.findOne(
//         { username: myData.username, password: myData.password },
//         function (err, docs) {
//           if (docs != null) {
//             console.log(docs);
//             console.log("Username and Password Matched.");
//             response = { status: "yes" };
//             res.send(response);
//           } else {
//             response = { status: "no" };
//             res.send(response);
//             return;
//           }
//         }
//       );
//     }
//   });
// });

app.use("/post", (req, res) => {
  var myData = new User(req.body);
  User.findOne({ username: myData.username }, function (err, docs) {
    if (docs != null) {
      User.findOne(
        { username: myData.username, password: myData.password },
        function (err, docs) {
          if (docs != null) {
            console.log("Username and Password Matched.");
            response = { status: "yes" };
            res.send(response);
          } else {
            response = { status: "no" };
            res.send(response);
            return;
          }
        }
      );
    }
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
