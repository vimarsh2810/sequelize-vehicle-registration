const jwt = require('jsonwebtoken');

const { responseObj } = require('../helpers/response.js');
const { User } = require('../models/user.js');

require('dotenv').config();

const validateToken = (req, res, next) => {

  // Checking if cookie contains token
  const token = req.cookies.jwt;
  if(!token) {
    return res.status(401).json(responseObj(401, false, 'No Token'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      switch(err.name) {
        case 'JsonWebTokenError':
          return res.status(401).json(responseObj(401, false, 'Invalid Token'));
        case 'TokenExpiredError':
          return res.status(401).json(responseObj(401, false, 'Token Expired'));
        case 'SyntaxError':
          return res.status(400).json(responseObj(400, false, 'Malformed Token'));
        default:
          return res.status(401).json(responseObj(401, false, err.message));
      }
    }
    req.userData = decoded;
    // Checking if token is stored in DB or not
    User.findByPk(decoded.userId)
      .then(user => {
        if(!user.accessToken) {
          return res.status(401).json(responseObj(401, false, 'No Token'));
        }
        next();
        return;
      })
      .catch(error => {
        return res.status(500).json(responseObj(500, false, error.message));
      });
  });
};

module.exports = { validateToken };