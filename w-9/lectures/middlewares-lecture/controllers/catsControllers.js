const getCats = (req, res) => {
  res.send('Hello Cats!');
};

const postCat = (req, res) => {
  res.json({ name: 'Tom', age: 3 });
};
const oneCat = (req, res) => {
  res.json({ name: 'Tom', age: 3 });
};
const updateCat = (req, res) => {
  res.json({ name: 'Tom', age: 3 });
};

export { getCats, postCat, oneCat, updateCat };
