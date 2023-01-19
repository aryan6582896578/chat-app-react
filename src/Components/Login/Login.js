import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../CSS/Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function postData(credentials) {
  return fetch("http://localhost:8080/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function getStatus() {
  const response = await fetch("http://localhost:8080/post");
  var data = await response.json();
  var res = data.status;
  console.log(res);
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    const tk = token.token;
    console.log(tk);
    console.log(typeof tk);
    await postData({ username, password, tk });

    console.log("after");

    console.log(username, password, token);
    const response = await fetch("http://localhost:8080/post");
    var data = await response.json();
    var res = data.status;
    if (res == "no") {
      console.log("Its a no!!");
      return;
    } else if (res == "yes") {
      console.log("Its a yes");
    }
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
