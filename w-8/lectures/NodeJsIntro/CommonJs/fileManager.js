const fs = require('fs');

const options = { encoding: 'utf8', flag: 'w', mode: 0o666 };

fs.writeFile('./test.html', '<h1>Hello world</h1>', options, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Write!');
  }
});

fs.readFile('./test.html', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
