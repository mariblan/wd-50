const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(
    'index.html',
    { root: path.join(__dirname, './public') },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File send!`);
      }
    }
  );
});

app.delete('/', (req, res) => {
  res.json({ good: 'yep' });
});
app.get('/views', (req, res) => {
  res.render('tests', { myTitle: 'My ejs file', page: 4 });
});
app.get('/test2', (req, res) => {
  res.render('test2', { users: ['Bob', 'John', 'Jane'] });
});

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);
