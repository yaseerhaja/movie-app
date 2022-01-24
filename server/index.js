const express = require('express');
const bodyParser = require('body-parser');
const contextPath = process.env.CONTEXT_PATH || '';
const app = express();
console.log('contextPath=' + contextPath);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
require('dotenv').config();

const movies = require('./routes/api/movies');

app.use(contextPath + '/api/movies', movies);

if (process.env.NODE_ENV != null && process.env.NODE_ENV.trim() === "production") {
  //Static Folder
  app.use(contextPath, express.static(__dirname + "/public/"));
  //Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
