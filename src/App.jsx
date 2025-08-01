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
    const fetchData = async () => {
      const [teachersRes, studentsRes] = await Promise.all([
        fetch('http://localhost:3030/api/teachers'),
        fetch('http://localhost:3030/api/students'),
      ]);

      const teachersData = await teachersRes.json();
      const studentsData = await studentsRes.json();

      setTeachers(teachersData);
      setStudents(studentsData);
    };

    fetchData();
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
