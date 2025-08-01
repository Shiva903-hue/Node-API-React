import React, { useEffect, useState } from 'react';
import Teachers from './Components/Teachers';
import Students from './Components/Students';
import Pagination from './Components/Pagination';

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
  Promise.all([
    fetch('http://localhost:3030/api/teachers').then(res => res.json()),
    fetch('http://localhost:3030/api/students').then(res => res.json())
    
  ]).then(([teachersData, studentsData]) => {
    setTeachers(teachersData);
    setStudents(studentsData);
  });
}, []);

  const totalPages = Math.ceil(Math.max(students.length, teachers.length) / itemsPerPage);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Teachers 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage}
        teachers={teachers}
      />

      <Students 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage}
        students={students}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
