import OnePerson from './OnePerson';
import { teachers } from '../data';
function Teachers() {
  return (
    <div>
      Teachers
      <h2>Teachers</h2>
      <div>
        {teachers.map((teacher, index) => (
          <OnePerson key={index} person={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Teachers;
