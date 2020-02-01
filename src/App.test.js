import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "react-testing-library";
import App from "./App";
import Button from "./components/button/button";
import User from "./components/connectedComponents/user/user";
import  allReducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
//import styles from  './style.styl';
import '@testing-library/jest-dom';

import path from 'path';
import { JestEnvironment } from "@jest/environment";

it("renders button ",  async () => {
  // render App into jsdom
  render(<Button label="Testing" />);

  // Take screenshot with generateImage()
  const screenshot = await generateImage();
  // and compare it to the previous sceenshot with toMatchImageSnapshot()
  expect(screenshot).toMatchImageSnapshot();
});

it("renders username component",  async () => {

  const store = createStore(allReducers);

  render(<Provider store={store} >
           <User />
         </Provider>
    );
 
  const screenshot = await generateImage({
    debug: false
  });

  expect(screenshot).toMatchImageSnapshot();
 
});
