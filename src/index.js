import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
//redux provider
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';


import "./index.css";
import App from "./App";


//wrap our app component in browserRouter in order to provide it all the functionality that comes with browser router
ReactDOM.render(
  <Provider store={store}>
    {/* Provider is the parent of everything in our application, allows us to get access to everything related to the store */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
