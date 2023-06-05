import React from 'react';
import './styles.css';

const StudentTable = ({ students }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
