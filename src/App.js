import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from './components/button/button';
import User from './components/user/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ABHA Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="Click Me" />
        <User />
      </div>
    );
  }
}

export default App;
