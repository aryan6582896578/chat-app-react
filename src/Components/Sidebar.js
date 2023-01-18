import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "./Clock";
import Welcome from "./Welcome";
import ErrorPage from "../Components/ErrorPage";
class Sidebar extends React.PureComponent {
  render() {
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
              <li>
                <Link to={`login`}>Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/time" component={Clock} />
          <Route path="/about" component={Clock} />
          <Route path={"*"} component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}
export default Sidebar;
