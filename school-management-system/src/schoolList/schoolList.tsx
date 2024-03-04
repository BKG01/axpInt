import React, { useState } from 'react';

const SchoolList: React.FC = () => {
  const [schools, setSchools] = useState<string[]>([]);
  const [town, setTown] = useState<string>('');

  const handleTownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTown(event.target.value);
  };

  return (
    <div>
      <h1>School List</h1>
      <input type="text" placeholder="Enter town" onChange={handleTownChange} />
      <ul>
        {/* Render the list of schools */}
        {schools.map((school, index) => (
          <li key={index}>{school}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
