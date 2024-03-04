
import React from 'react';
import './App.css';
import SchoolForm from './SchoolForm';
import './SchoolForm.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>School Management System</h1>
            <SchoolForm />
        </div>
    );
};

export default App;
