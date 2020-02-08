import React from "react";
import { render, screen } from "@testing-library/react";
import User from "../../user/user.js";
import  allReducers from '../../../../reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const store = createStore(allReducers);

it("renders User ",  async () => {
   render(<Provider store = {store} ><User /></Provider>);
   expect(screen.getByText("Username")).toBeInTheDocument()
  
});

