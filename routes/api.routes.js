const express = require('express');

const userController = require('../controllers/user.controller.js');
const apiController = require('../controllers/api.controller.js');

const router = express.Router();

// GET - get data of all users
router.get('/userData', apiController.userDataList);

// GET - get data of a user by id
router.get('/targetUserData/:id', apiController.targetUserData);

// GET - get data of a state by id
router.get('/stateDataById/:id', apiController.targetStateData);

module.exports = router;