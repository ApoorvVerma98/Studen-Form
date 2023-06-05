import React, { useState } from 'react';
import './styles.css';

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, age, grade, address };
    onSubmit(student);
    setName('');
    setAge('');
    setGrade('');
    setAddress('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Grade:
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
