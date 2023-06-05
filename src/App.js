import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import './styles.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleFormSubmit = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app">
      <h1>Student Information</h1>
      <StudentForm onSubmit={handleFormSubmit} />
      <StudentTable students={students} />
    </div>
  );
};

export default App;
