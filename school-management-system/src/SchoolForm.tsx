
import React, { useState } from 'react';
import './SchoolForm.css'; 

const SchoolForm: React.FC = () => {
    const [newSchoolName, setNewSchoolName] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const [schoolNameFilter, setSchoolNameFilter] = useState('');
    const [townFilter, setTownFilter] = useState('');
    const [schools, setSchools] = useState<any[]>([
        // List of schools...
    ]);
    const [filteredSchools, setFilteredSchools] = useState<any[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSchool = {
            name: newSchoolName,
            address: newAddress,
        };
        console.log('New school:', newSchool);
        setNewSchoolName('');
        setNewAddress('');
        setSchools([...schools, newSchool]);
    };

    const handleFilter = () => {
        if (filterOption === 'name') {
            // Filter by school name
            const filtered = schools.filter(school => school.name.toLowerCase().includes(schoolNameFilter.toLowerCase()));
            setFilteredSchools(filtered);
        } else if (filterOption === 'town') {
            // Filter by town
            const filtered = schools.filter(school => school.address.toLowerCase().includes(townFilter.toLowerCase()));
            setFilteredSchools(filtered);
        }
    };

    const handleFilterOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterOption(event.target.value);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="schoolName">School Name:</label>
                    <input
                        type="text"
                        id="schoolName"
                        value={newSchoolName}
                        onChange={(e) => setNewSchoolName(e.target.value)}
                        placeholder="Enter school name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                        placeholder="Enter address"
                        required
                    />
                </div>
                <button type="submit">Add School</button>
            </form>

            <div className="form-group">
                <label htmlFor="filterBy">Filter by:</label>
                <select id="filterBy" onChange={handleFilterOptionChange}>
                    <option value="">Select</option>
                    <option value="name">Name</option>
                    <option value="town">Town</option>
                </select>
            </div>

            {filterOption === 'name' && (
                <div className="form-group">
                    <input
                        type="text"
                        value={schoolNameFilter}
                        onChange={(e) => setSchoolNameFilter(e.target.value)}
                        placeholder="Enter school name to filter"
                    />
                </div>
            )}

            {filterOption === 'town' && (
                <div className="form-group">
                    <input
                        type="text"
                        value={townFilter}
                        onChange={(e) => setTownFilter(e.target.value)}
                        placeholder="Enter town to filter"
                    />
                </div>
            )}

            <button className="form-group filter-button" onClick={handleFilter}>Filter</button>

            <ul className="school-list">
                {/* Display filtered schools */}
                {filteredSchools.map((school, index) => (
                    <li key={index}>{school.name} - {school.address}</li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolForm;