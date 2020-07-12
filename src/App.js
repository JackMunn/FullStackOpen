import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import part0 from "./part0/index";
import part1 from './part1/index';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home </Link> |
      <Link to="/path0"> Part 0 Exercises </Link> |
      <Link to="/path1"> Part 1 Exercises </Link> |
      <br />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/path0" component={part0} />
        <Route exact path="/path1" component={part1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
