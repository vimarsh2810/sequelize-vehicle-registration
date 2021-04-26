const { User } = require('../models/user.js');
const { responseObj } = require('../helpers/response.js');
const { createToken } = require('../helpers/createToken.js');
const { VehicleRegistration } = require('../models/vehicleRegistration.js');
const { Vehicle } = require('../models/vehicle.js');
const { State } = require('../models/state.js');

// Render Signup page
exports.getSignup = async (req, res, next) => {
  try {
    const stateList = await State.findAll({
      attributes: ['id', 'stateName']
    });
    
    res.render('signup', {
      stateList: stateList
    });
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Create a User record
exports.postSignup = async (req, res, next) => {
  const userDetails = req.body;
  try {

    const user = await User.create({
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
      stateId: userDetails.state,
      status: true
    });

    res.redirect('/auth/login');
    // return res.status(200).json(responseObj(200, true, 'User Registered Successfully', { 'insertId': user.id }));
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Render Login page
exports.getLogin = (req, res, next) => {
  res.render('login');
};

// Logging User by Token generation
exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {

    const user = await User.findOne({ where: { email: email, status: 1 }});
    if(!user) {
      return res.status(404).json(responseObj(404, false, 'User not registered'));
    }

    if(password != user.password) {
      return res.status(404).json(responseObj(401, false, 'Incorrect email or password'));
    }

    const token = createToken({ userId: user.id, userEmail: user.email }, 2*60);
    res.cookie('jwt', token, {maxAge: 2*60*1000, httpOnly: true});
    user.accessToken = token;
    const result = await user.save();
    res.redirect('/auth/dashboard');
    
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Logging user out
exports.getLogout = async (req, res, next) => {
  try {
    const userData = req.userData;
    const user = await User.findByPk(userData.userId);
    user.accessToken = null;
    const result = await user.save();
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/auth/login');
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
}

// Dashboard page - redirect after successfull login
exports.dashboard = async (req, res, next) => {
  const userDetails = req.userData;
  try {
    const user = await User.findByPk(userDetails.userId, {
      include: [
        { 
          model: State, 
          attributes: ['id', 'stateName'] 
        },
        { 
          model: VehicleRegistration, 
          include: [
            { 
              model: Vehicle, 
              attributes: ['id', 'name', 'type']  
            }
          ], 
          attributes: ['id', 'registrationDate', 'expiryDate'] 
        }
      ], 
      attributes: ['id', 'name', 'email']
    });

    return res.render('dashboard', {
      userObj: user
    });
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};