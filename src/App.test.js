import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "react-testing-library";
import App from "./App";
import Button from "./components/button/button";
import User from "./components/connectedComponents/user/user";
import  allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const store = createStore(allReducers);

it("renders App ",  async () => {
  render(<Provider store = {store} ><App /></Provider>);

  // Take screenshot with generateImage()
  const screenshot = await generateImage();
  // and compare it to the previous sceenshot with toMatchImageSnapshot()
  expect(screenshot).toMatchImageSnapshot();
});

it("renders button ",  async () => {
  render(<Button label="Testing" />);
  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});

it("renders username component",  async () => {
  render(<Provider store={store} >
           <User />
         </Provider>
    );
 
  const screenshot = await generateImage({
    debug: false
  });

  expect(screenshot).toMatchImageSnapshot();
 
});
