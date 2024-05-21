const getAllCats = (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Tom',
      age: 3,
      breed: 'common cat',
    },
    {
      id: 2,
      name: 'Bolita',
      age: 3,
      breed: 'siamese',
    },
  ]);
};

const getOneCat = (req, res) => {
  console.log(req.params.id);
  const cat = {
    id: 1,
    name: 'Tom',
    age: 3,
    breed: 'common cat',
  };
  if (cat.id.toString() === req.params.id) {
    res.json(cat);
  } else {
    res.send('Cat not found');
  }
};

const createOneCat = (req, res) => {
  const newCat = {
    id: 3,
    name: 'Toto',
    age: 6,
    breed: 'common cat',
  };
  if (!newCat) res.status(404).send('Not found!');
  res.json(newCat);
};

const updatedOneCat = (req, res) => {
  const updatedCat = {
    name: 'Toto',
    age: 5,
    breed: 'common cat',
  };
  if (!updatedCat) res.status(404).send('Not found!');
  res.json(updatedCat);
};

module.exports = { getAllCats, getOneCat, createOneCat, updatedOneCat };
