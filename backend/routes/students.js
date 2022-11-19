const express = require('express');
const router = express.Router();
const students = require('../services/students');

/* GET full Students table information. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await students.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await students.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
