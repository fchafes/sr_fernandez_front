import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cursorReducer from "./redux/cursorReducer.js";

const store = configureStore({
  reducer: { cursor: cursorReducer },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
