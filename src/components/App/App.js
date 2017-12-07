import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./App.css";

class App extends Component {
  render() {
    return <div className={s.root} />;
  }
}

export default withStyles(s)(App);
