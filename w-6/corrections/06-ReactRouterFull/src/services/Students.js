import axios from 'axios';

const getStudents = async (number = 10) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?results=${number}`
  );
  return data.results;
};

const getSingleStudent = async (uuid) => {
  const { data } = await axios.get(`https://randomuser.me/api/?uuid=${uuid}`);
  return data.results[0];
};

export {getStudents, getSingleStudent}