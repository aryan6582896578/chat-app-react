const express = require("express");
const cors = require("cors");
const app = express();

export default function Server() {
  app.use(cors());
  var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  app.use("/login", (req, res) => {
    const token = rand();
    res.send({
      token,
    });
  });

  app.listen(8080, () =>
    console.log("API is running on http://localhost:8080/login")
  );
}
