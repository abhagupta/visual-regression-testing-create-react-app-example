import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "react-testing-library";
import App from "./App";
import Button from "./components/button/button";
import User from "./components/user/user";
import  allReducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
//import styles from  './style.styl';
import '@testing-library/jest-dom';

import path from 'path';
import { JestEnvironment } from "@jest/environment";

// expect.extend({toBeInTheDocument, toHaveClass})


it("renders button ",  async () => {
  // render App into jsdom
  render(<Button label="abha" />);

  // Take screenshot with generateImage()
  const screenshot = await generateImage();
  // and compare it to the previous sceenshot with toMatchImageSnapshot()
  expect(screenshot).toMatchImageSnapshot();
});

it.only("renders username component",  async () => {

//   jest.mock('./style.styl',()=>{
//     return {
//         default: {
//           username: 'username'
//         }
      
//     };
// });

  const store = createStore(allReducers);

  render(<Provider store={store} >
           <User />
         </Provider>
    );
 
  const screenshot = await generateImage({
    screenshot: {
      path: 'test_full.png'
    },
    debug: true
  });
 
});
