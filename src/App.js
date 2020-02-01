import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./styles/App.styl";
import Button from './components/button/button';
import User from './components/connectedComponents/user/user';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <img  src={logo} className={styles.App_logo} alt="logo" />
          <h1 className={styles.App_title}>Welcome to React</h1>
        </header>
        <p className={styles.App_intro}>
         Visual Regression Testing is pretty awesome!
        </p>
        <Button label ="I am button component rendered for demo"/>
        <User />
      </div>
    );
  }
}

export default App;
