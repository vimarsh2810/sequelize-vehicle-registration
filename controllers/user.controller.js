const { User } = require('../models/user.js');
const { responseObj } = require('../helpers/response.js');

// Update a User Info
exports.updateUser = async (req, res, next) => {
  const id = req.params.id;
  const userDetails = req.body;
  try {

    const user = await User.findByPk(id);
    if(!user) {
      return res.status(404).json(responseObj(404, false, `User with id = ${id} not found`));
    }

    user.name = userDetails.name;
    user.email = userDetails.email;
    user.password = userDetails.password;
    user.stateId = userDetails.stateId;

    user.save()
      .then(result => {
        return res.status(200).json(responseObj(200, true, `User with id = ${id} updated`));
      })
      .catch(err => {
        return res.status(500).json(responseObj(500, false, err.message));
      });

  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};

// Delete User Record
exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {

    const result = await User.destroy({ where: { id: id } });
    if(!result) {
      return res.status(404).json(responseObj(404, false, `User with id = ${id} doesn't exist`));
    }

    return res.status(200).json(responseObj(200, true, `User with id = ${id} deleted`));
    
  } catch (error) {
    return res.status(500).json(responseObj(500, false, error.message));
  }
};
