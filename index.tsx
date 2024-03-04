import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Define the base URL for your API
const BASE_URL = 'http://localhost:3000/api';

// Pass the base URL to the App component as a prop
ReactDOM.render(
  <React.StrictMode>
    <App baseUrl={BASE_URL} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
