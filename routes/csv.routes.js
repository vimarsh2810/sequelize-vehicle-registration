const express = require('express');

const csvController = require('../controllers/csv.controller.js');

const router = express.Router();

// GET - API to generate CSV
router.get('/create', csvController.generateCSV);

module.exports = router;