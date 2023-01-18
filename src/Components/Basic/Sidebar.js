import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "./Clock";
import Welcome from "./Welcome";
import ErrorPage from "./ErrorPage";
import Login from "../Login/Login";
import useToken from "../../useToken";
function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
function getToken() {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}
export default function Sidebar() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <div id="sidebar">
        <h1>Chat App</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          {/* <form method="post">
              <button type="submit">New</button>
            </form> */}
        </div>
        <nav>
          <ul>
            {" "}
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`time`}>Time</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/time" component={Clock} />
        <Route path="/about" component={Clock} />
        <Route path="/login" component={Login} />

        <Route path={"*"} component={ErrorPage} />
      </Switch>
    </Router>
  );
}
