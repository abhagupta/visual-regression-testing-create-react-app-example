import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.styl";
import Button from './components/button/button';
import User from './components/user/user';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <img  src={logo} className={styles.App_logo} alt="logo" />
          <h1 className={styles.App_title}>Welcome to React</h1>
        </header>
        <p className={styles.App_intro}>
          ABHA Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="Click Me" />
        <User />
      </div>
    );
  }
}

export default App;
