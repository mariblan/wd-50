import { getStudents} from '../services/Students';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);
  console.log(students);
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={`${student.id.name}${student.id.value}`}>
            <Link
              to={`/students/${student.id.name}${student.id.value}`}
            >{`${student.name.title} ${student.name.first} ${student.name.last}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
