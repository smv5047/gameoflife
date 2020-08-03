import React from "react";
import "./App.css";
import "nes.css/css/nes.min.css";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Grid} />
      <Route exact path="/about" component={About} />
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
