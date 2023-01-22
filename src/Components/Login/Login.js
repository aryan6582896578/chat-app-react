import React, { useState  } from "react";
import PropTypes from "prop-types";
import "../CSS/Login.css";
import { Navigate} from "react-router-dom";

async function Create_token_from_server(credentials) {
  return fetch("http://localhost:8080/createtoken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function send_login_data_to_server(credentials) {
  return fetch("http://localhost:8080/receivelogindata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Creating Token ")
    const gettoken = await Create_token_from_server({
      username,
      password,
    });
    const receivedtoken = gettoken.token;

    console.log("Token Created:", receivedtoken)

    console.log("Sending Login Data To Server");

    await send_login_data_to_server({
      username,
      password,
      receivedtoken,
    });

    console.log("Data Sent Was: " + "Username: " + username +"  Password: " + password + "   Token: " + receivedtoken);

    console.log("Searching For User")
    const response = await fetch("http://localhost:8080/receivelogindata");
    var data= await response.json();
    var res = data.status;
    
    if (res === "Access-Approved") {
      console.log("User Found");
      // <Redirect to='https://twitter.com/home' />



    } else if (res === "Access-denied") {
      console.log("User Not Found");
    }
    // setToken(receivedtoken);

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

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };