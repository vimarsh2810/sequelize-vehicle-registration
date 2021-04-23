const express = require('express');

const vehicleRegistrationController = require('../controllers/vehicleRegistration.controller.js');
const { validateToken } = require('../middlewares/validateToken.js');

const router = express.Router();

// POST - register a vehicle
router.post('/create/:vehicleId', validateToken, vehicleRegistrationController.registerVehicle);

// PUT - update vehicle registration
router.put('/update/id/:registrationId', validateToken, vehicleRegistrationController.updateRegistration);

// DELETE - delete registration record for a vehicle
router.delete('/delete/id/:registrationId', validateToken, vehicleRegistrationController.deleteRegistration);

module.exports = router;