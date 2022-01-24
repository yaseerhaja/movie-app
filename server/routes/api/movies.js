const express = require("express");
const router = express.Router();
const request = require('request');

const logger = require('../../logger');

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

router.get("/getMoviesByKey", (req, res) => {
  logger.log('info', '%s', req.originalUrl);

  const key = req.query.key;
  const plot = req.query.plot;
  const uri = `http://${API_END_POINT}/?s=${key}&plot=${plot}&apiKey=${API_KEY}`;
  logger.log('info', '%s', uri);
  request.get(uri,
    {},
    (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res
          .header("")
          .status(response.statusCode)
          .json(JSON.parse(response.body));
      }
    });
});

module.exports = router;
