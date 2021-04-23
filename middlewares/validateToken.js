const jwt = require('jsonwebtoken');

const { responseObj } = require('../helpers/response.js');

require('dotenv').config();

const validateToken = (req, res, next) => {
  // if(!req.headers.authorization) {
  //   return res.status(401).json(responseObj(401, false, 'Auth failed'));
  // }
  // const token = req.headers.authorization.split(" ")[1];
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
    next();
  });
};

module.exports = { validateToken };