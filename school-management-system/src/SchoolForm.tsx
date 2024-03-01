
import React, { useState } from 'react';
import './SchoolForm.css'; /* SchoolForm.css */



const SchoolForm: React.FC = () => {
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSchool = {
            name: schoolName,
            address: address,
        };
        console.log('New school:', newSchool);
        setSchoolName('');
        setAddress('');
    };

    return (
        <div className="form-container">
            <h2>Add New School</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="schoolName">School Name:</label>
                    <input
                        type="text"
                        id="schoolName"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add School</button>
            </form>
        </div>
    );
};

export default SchoolForm;
