import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SchoolForm from './SchoolForm'; // Make sure the path to SchoolForm is correct
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SchoolForm />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
