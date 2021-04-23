const { User } = require('../models/user.js');
const { responseObj } = require('../helpers/response.js');
const { State } = require('../models/state.js');
const { VehicleRegistration } = require('../models/vehicleRegistration.js');
const { Vehicle } = require('../models/vehicle.js');

// Registration info of all users
exports.userDataList = async (req, res, next) => {
  try {
    const usersDataList = await User.findAll({ 
      include: [
        { 
          model: State, 
          attributes: [['id', 'stateId'], 'stateName'] 
        }, 
        { 
          model: VehicleRegistration, 
          include: [
            { 
              model: Vehicle, 
              attributes: [['id', 'vehicleId'], 'name', 'type'] 
            }
          ], 
          attributes: [['id', 'registrationId'], 'registrationDate', 'expiryDate'] 
        }
      ], 
      attributes: [['id', 'userId'], 'name', 'email'] 
    });

    if(usersDataList.length < 1) {
      return res.status(404).json(responseObj(404, false, 'No User Data found'));
    }
    
    return res.status(200).json(responseObj(200, true, 'List of data of all users', usersDataList));
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Registration info of target user
exports.targetUserData = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId, {
      include: [
        { 
          model: VehicleRegistration, 
          include: [
            { 
              model: Vehicle, 
              attributes: [['id', 'vehicleId'], 'name', 'type'] 
            }
          ], 
          attributes: [['id', 'registrationId'], 'registrationDate', 'expiryDate'] 
        }
      ],
      attributes: [['id', 'userId'], 'name', 'email']
    });
    
    if(!user) {
      return res.status(404).json(responseObj(404, false, `User with id = ${userId} not found`));
    }

    return res.status(200).json(responseObj(200, true, `Vehicle Registration Data for User with id = ${userId}`, user));

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Registration info of target state
exports.targetStateData = async (req, res, next) => {
  const stateId = req.params.id;

  try {
    const stateData = await State.findByPk(stateId, {
      include: [
        { 
          model: User, 
          include: [
            { 
              model: VehicleRegistration, 
              include: [
                { 
                  model: Vehicle,
                  attributes: [['id', 'vehicleId'], 'name', 'type'] 
                }
              ], 
              attributes: [['id', 'registrationId'], 'registrationDate', 'expiryDate'] 
            }
          ], 
          attributes: [['id', 'userId'], 'name', 'email'] 
        }
      ], 
      attributes: [['id', 'stateId'], 'stateName']
    });

    if(!stateData) {
      return res.status(404).json(responseObj(404, false, `Data for State with id = ${stateId} not found`));
    }

    return res.status(200).json(responseObj(200, true, `Data for State with id = ${stateId}`, stateData));

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};