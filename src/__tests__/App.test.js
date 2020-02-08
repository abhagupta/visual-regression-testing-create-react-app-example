import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render, screen } from "@testing-library/react";
import App from "../App";

import  allReducers from '../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const store = createStore(allReducers);

it("renders App ",  async () => {
  render(<Provider store = {store} ><App /></Provider>);
  expect(screen.getByText("Welcome to React")).toBeInTheDocument()
})