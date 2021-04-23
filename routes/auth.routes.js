const express = require('express');

const authController = require('../controllers/auth.controller.js');
const { checkEmailSignup, checkEmailLogin } = require('../middlewares/checkEmail.js');
const { validateToken } = require('../middlewares/validateToken.js');

const router = express.Router();

// GET - render login page
router.get('/login', authController.getLogin);

// POST - logging in user
router.post('/login', checkEmailLogin, authController.postLogin);

// GET - render signup page
router.get('/signup', authController.getSignup);

// POST - create/register a user
router.post('/signup', checkEmailSignup, authController.postSignup);

// GET - logout a user
router.get('/logout', validateToken, authController.getLogout);

// GET - landing page after logging in, displays vehicles owned by logged in user
router.get('/dashboard', validateToken, authController.dashboard);

module.exports = router;