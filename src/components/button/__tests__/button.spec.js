import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../button";
import  allReducers from '../../../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const store = createStore(allReducers);

it("renders Button ",  async () => {
   render(<Button label="Testing"/>);
   expect(screen.getByText("Testing")).toBeInTheDocument()
  
});

