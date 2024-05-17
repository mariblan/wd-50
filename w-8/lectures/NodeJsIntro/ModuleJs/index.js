import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('<h1>Hello</h1>');
  res.end('Hello, Class!');
});

// const PORT = url || 8080;

const PORT = 8000;

server.listen(8000, () =>
  console.log(`Server running in http://localhost:${PORT}`)
);
