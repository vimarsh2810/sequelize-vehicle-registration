const { Vehicle } = require('../models/vehicle.js');
const { responseObj } = require('../helpers/response.js');

// Create record for a new Vehicle
exports.createVehicle = async (req, res, next) => {
  const vehicle = req.body;
  try {
    const result = await Vehicle.create({
      name: vehicle.name,
      type: vehicle.type
    });

    return res.status(200).json(responseObj(200, true, 'New Vehicle Created', { 'insertId': result.id }));

  } catch (error) {
    return res.status(500).json(responseObj(500, true, error.message));
  }
}

// Update Vehicle Info
exports.updateVehicle = async (req, res, next) => {
  const id = req.params.id;
  const updatedVehicle = req.body;
  try {

    const vehicle = await Vehicle.findByPk(id);
    vehicle.name = updatedVehicle.name;
    vehicle.type = updatedVehicle.type;

    vehicle.save()
      .then(result => {
        return res.status(200).json(responseObj(200, true, `Vehicle with id = ${id} Updated`));
      })
      .catch(err => {
        return res.status(500).json(responseObj(500, false, err.message));
      });

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
}

// Delete record of a Vehicle
exports.deleteVehicle = async (req, res, next) => {
  const id = req.params.id;
  try {

    const result = await Vehicle.destroy({ where: { id: id } });
    if(!result) {
      return res.status(404).json(responseObj(404, false, `Vehicle with id = ${id} doesn't exist`));
    }

    return res.status(200).json(responseObj(200, true, `Vehicle with id = ${id} deleted`));
    
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};