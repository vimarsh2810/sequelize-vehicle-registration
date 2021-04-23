const { VehicleRegistration } = require('../models/vehicleRegistration.js');
const { Vehicle } = require('../models/vehicle.js');
const { responseObj } = require('../helpers/response.js');

// Register a Vehicle
exports.registerVehicle = async (req, res, next) => {
  const userDetails = req.userData;
  const vehicleId = req.params.vehicleId;
  try {
    
    const vehicle = await Vehicle.findByPk(vehicleId);
    if(!vehicle) {
      return res.status(404).json(responseObj(404, false, `Vehicle with id = ${vehicleId} not found`));
    }

    vehicle.registered = true;
    const flag = await vehicle.save();
    const result = await vehicle.createVehicleRegistration({
      userId: userDetails.userId,
      expiryDate: req.body.expiryDate
    });

    return res.status(200).json(responseObj(200, true, `Registration done for vehicle with id = ${vehicleId} in name of user with id = ${userDetails.userId}`, { 'insertId': result.id }));
  
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Update Vehicle Registration info
exports.updateRegistration = async (req, res, next) => {
  const registrationId = req.params.registrationId;
  try {

    const vehicleRegistration = await VehicleRegistration.findByPk(registrationId);
    if(!vehicleRegistration) {
      return res.status(404).json(responseObj(404, false, `Vehicle Registration dat for id = ${registrationId} not found`));
    }
    vehicleRegistration.expiryDate = req.body.expiryDate,
    vehicleRegistration.userId = req.userData.userId

    vehicleRegistration.save()
      .then(result => {
        return res.status(200).json(responseObj(200, true, `Vehicle Registration with id = ${registrationId} updated`));
      })
      .catch(err => {
        return res.status(500).json(responseObj(500, false, err.message));
      });

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Delete Vehicle Registration Record
exports.deleteRegistration = async (req, res, next) => {
  const registrationId = req.params.registrationId;
  try {

    const vehicleRegistration = await VehicleRegistration.findByPk(registrationId);
    const vehicle = await Vehicle.findByPk(vehicleRegistration.vehicleId);
    vehicle.registered = false;
    const flag = await vehicle.save();
    const result = await vehicleRegistration.destroy();
    
    if(!result) {
      return res.status(404).json(responseObj(404, false, `Vehicle Registration with id = ${registrationId} doesn't exist`));
    }

    return res.status(200).json(responseObj(200, true, `Vehicle Registration with id = ${registrationId} deleted`));

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};