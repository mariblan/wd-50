const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const path = require('path');

const {
  getAllCats,
  getOneCat,
  createOneCat,
  updateOneCat,
} = require('./controllers/catsControllers');

// app.get('/', (req, res) => {
//   //   res.send('Hello Animals!');
//   res.sendFile(
//     'index.html',
//     { root: path.join(__dirname, './public') },
//     (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('File sent!');
//       }
//     }
//   );
// });

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Animals',
    sentence: 'Welcome to the animal shelter!',
  });
});

// read the information on the route /cats
// app.get('/cats', (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: 'Tom',
//       age: 3,
//       breed: 'common cat',
//     },
//     {
//       id: 2,
//       name: 'Bolita',
//       age: 3,
//       breed: 'siamese',
//     },
//   ]);
// });

// creating a new resource in the route /cats
// app.post('/cats', (req, res) => {
//   const newCat = {
//     id: 3,
//     name: 'Toto',
//     age: 6,
//     breed: 'common cat',
//   };
//   if (!newCat) res.status(404).send('Not found!');
//   res.json(newCat);
// });

//shortened version

app.route('/cats').get(getAllCats).post(createOneCat);

// app.get('/cats/:id', (req, res) => {
//   console.log(req.params.id);
//   const cat = {
//     id: 1,
//     name: 'Tom',
//     age: 3,
//     breed: 'common cat',
//   };
//   if (cat.id.toString() === req.params.id) {
//     res.json(cat);
//   } else {
//     res.send('Cat not found');
//   }
// });

// app.put('/cats/:id', (req, res) => {
//   const updatedCat = {
//     name: 'Toto',
//     age: 5,
//     breed: 'common cat',
//   };
//   if (!updatedCat) res.status(404).send('Not found!');
//   res.json(updatedCat);
// });

app.route('/cats/:id').get(getOneCat);

app.route('/dogs').get(getAllCats).post(createOneCat);
app.route('/dogss/:id').get(getOneCat);

app.listen(PORT, () =>
  console.log(`The server is live in http://localhost:${PORT}`)
);
