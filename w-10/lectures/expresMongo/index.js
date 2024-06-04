const express = require('express');
const app = express();
const connectionToDB = require('./DB/dbConnection.js');
const countriesRouter = require('./routes/countryRoutes.js');
const sanitize = require('express-mongo-sanitize');
require('dotenv').config();

connectionToDB();
const port = process.env.PORT || 8081;

//Middlewares
app.use(sanitize({ replaceWith: '_', allowDots: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Country routes
app.use('/countries', countriesRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
