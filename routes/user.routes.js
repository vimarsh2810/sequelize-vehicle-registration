const express = require('express');

const userController = require('../controllers/user.controller.js');
const { validateToken } = require('../middlewares/validateToken.js');

const router = express.Router();

// PUT - update user 
router.put('/update/id/:id', validateToken, userController.updateUser);

// DELETE - delete user record
router.delete('/delete/id/:id', validateToken, userController.deleteUser);

module.exports = router;