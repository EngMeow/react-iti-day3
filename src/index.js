import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.js' 
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'react-bootstrap'
import { CounterContextProvider } from './context/CounterContex';
import { CartContexProvider } from './context/CartContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <CartContexProvider>
                        <CounterContextProvider>
                        <React.StrictMode>
                                <App />
                        </React.StrictMode>
                        </CounterContextProvider>
                </CartContexProvider>
        </BrowserRouter>
        );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
