import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./view/Index";
import logo from "./assets/images/logo.bmp";
import AddTodo from './view/AddTodo';

export default function App() {
  return (
    <Router>
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://fikrihashfi.herokuapp.com">
          <img className="rounded" src={logo} width="50" height="50" alt="" />
        </a>
        <Link to="/" className="navbar-brand">My Todo List</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <Route path="/" exact component={Index} />
      {/* <Route path="/edit/:id" component={EditTodo} /> */}
      <Route path="/create" component={AddTodo} />
    </div>
  </Router>
  );
}
