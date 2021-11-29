import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStudent from "./components/AddStudent";
import Student from "./components/Student";
import StudentsList from "./components/StudentList";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/students" className="navbar-brand">
          Netas Student App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/students"} className="nav-link">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/students"]} component={StudentsList} />
          <Route exact path="/add" component={AddStudent} />
          <Route path="/students/:id" component={Student} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
