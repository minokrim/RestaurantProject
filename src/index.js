import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes,HashRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homesignin from './signin/signin';
import Register from './register/register';
import Homepage from './Homepage/homepage';
import Order from './orderpage/order';
import ChangePass from './SET/changepass';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/signin" element={<Homesignin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/" element={<ChangePass/>}/>
      </Routes>
    </HashRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
