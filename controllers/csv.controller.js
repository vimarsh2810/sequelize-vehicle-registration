const Json2csvParser = require('json2csv').Parser;

const fs = require("fs");

const sequelize = require('../configs/connection.js');
const { responseObj } = require('../helpers/response.js');

const json2csvParser = new Json2csvParser({ header: true });

exports.generateCSV = async (req, res, next) => {
  try {
    const data = await sequelize.query(`SELECT 
      users.name,
      users.email,
      vehicles.id as vehicleId,
      vehicles.name as vehicleName,
      vehicleregistrations.registrationDate,
      vehicleregistrations.expiryDate
    FROM users
    JOIN vehicleregistrations
      ON vehicleregistrations.userId = users.id
    JOIN vehicles
      ON vehicleregistrations.vehicleId = vehicles.id`, {
        type: sequelize.QueryTypes.SELECT
      }
    );
    const csv = json2csvParser.parse(data);
    fs.writeFile(`./CSV_Files/registration_info_${Math.floor(Math.random()*1000)}.csv`, csv, (error) => {
      if (error) {
        return res.status(500).json(responseObj(500, false, error.message));
      }
      else {
        return res.status(200).json(responseObj(200, true, `CSV Generated Successfully`));
      }
    });
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};