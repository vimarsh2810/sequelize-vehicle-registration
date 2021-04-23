const express = require('express');

const vehicleController = require('../controllers/vehicle.controller.js');
const { validateToken } = require('../middlewares/validateToken.js');

const router = express.Router();

// POST - create a new vehicle
router.post('/create', validateToken, vehicleController.createVehicle);

// PUT - update existing vehicle
router.put('/update/id/:id', validateToken, vehicleController.updateVehicle);

// DELETE - delete a vehicle
router.delete('/delete/id/:id', validateToken, vehicleController.deleteVehicle);

module.exports = router;