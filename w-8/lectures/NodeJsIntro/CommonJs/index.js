// with common we use the require for imports and the module.export for exports

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, Class!');
});

// const PORT = url || 8080;

const PORT = 8000;

server.listen(8000, () =>
  console.log(`Server running in http://localhost:${PORT}`)
);
