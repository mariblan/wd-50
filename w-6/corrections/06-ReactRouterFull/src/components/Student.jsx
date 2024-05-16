import { getSingleStudent } from '../services/Students';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Student() {
  const { id } = useParams();
  const [oneStudent, setOneStudent] = useState({});
  useEffect(() => {
    getSingleStudent(id).then((data) => setOneStudent(data));
  }, []);
  // console.log(id);
  console.log(oneStudent);
  return (
    <div>
     {oneStudent && (<h2>{oneStudent?.name.first} {oneStudent?.name.last}</h2>)}
      {oneStudent &&  (<p>Email: {oneStudent?.email}</p>)}
    </div>
  );
}

export default Student;
