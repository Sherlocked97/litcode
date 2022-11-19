const express = require('express');
const router = express.Router();
const projects = require('../services/projects');

/* GET full Projects table information. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await projects.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Project table. `, err.message);
    next(err);
  }
});

/* GET single row of Projects table. */
router.get('/:id', async function(req, res, next) {
  var id = req.params.id;
  try {
    res.json(await projects.getProject(req.params.id));
  } catch (err) {
    console.error(`Error while getting Project table row. `, err.message);
    next(err);
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await projects.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
