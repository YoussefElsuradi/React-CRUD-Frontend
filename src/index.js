import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter >
      <HashRouter>
        <App />
        </HashRouter>
    </BrowserRouter>
  

);

reportWebVitals();
