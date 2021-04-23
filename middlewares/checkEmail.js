const sequelize = require('../configs/connection.js');
const { responseObj } = require('../helpers/response.js');
const { User } = require('../models/user.js');

const checkEmailSignup = async (req, res, next) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ where: { email: email } });
    if(user) {
      return res.status(409).json(responseObj(409, false, `Email is already registered`));
    }
    next();
    return;
  } catch (error) {
    return res.status(500).json(500, false, error.message);
  }
};

const checkEmailLogin = async (req, res, next) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ where: { email: email } });
    if(!user) {
      return res.status(404).json(responseObj(404, false, 'Email is not registered'));
    }
    return next();
  } catch (error) {
    return res.status(500).json(500, false, error.message);
  }
};

module.exports = { checkEmailLogin, checkEmailSignup };