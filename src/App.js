import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Films from "./components/Films";
import Logowanie from "./components/Logowanie";
import Rejestracja from "./components/Rejestracja";
import TVprograms from "./components/TVprograms";
import TVseries from "./components/TVseries";
import Add from "./components/Add";
import Film from "./components/Film";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="nav-item">
          <li >
              <img src="./popcorn.png" alt="" width="25" height="30" />
          </li>
          <li >
            <Link className="link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="link" to="/add">Add</Link>
          </li>
          <li>
            <Link className="link" to="/log">Log in</Link>
          </li>
          <li>
            <Link className="link" to="/">Sign up</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/film/:id">
            <Film />
          </Route>
          <Route path="/log">
            <Logowanie />
          </Route>
          <Route path="/">
            <Rejestracja />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
