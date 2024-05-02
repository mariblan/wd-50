import { students } from '../data.js';
import OnePerson from './OnePerson.jsx';

function Students() {
  return (
    <div>
      <h2>Students</h2>
      <div>
        {students.map((student, index) => (
          <OnePerson key={index} person={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;
