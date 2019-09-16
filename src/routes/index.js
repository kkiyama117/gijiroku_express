const express = require('express');
const router = express.Router();

const db = require('../database/index');

/* GET home page. */
router.get('/', function(req, res) {
  // router.get('/', function(req, res, next) {
  res.send('index');
  db.createUser('test', 'test2');
});

module.exports = router;
