import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import rootReducer from "./reducers/index.js";

const store = configureStore({
  reducer: rootReducer,
  devtools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
