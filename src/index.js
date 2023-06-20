import React from 'react';
import './index.css';
import App from './App';
import 'boxicons';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from "react-redux";
// import store from './redux/store';


ReactDOM.render(
  <BrowserRouter>
  
    <App />
  
 </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
