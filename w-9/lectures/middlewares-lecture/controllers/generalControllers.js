import { readFile } from 'fs';

const getMethod = (req, res, next) => {
  readFile('file-does-not-exist', (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
};

const postMethod = (req, res) => {
  res.send('Hello POST!');
};

export { getMethod, postMethod };
