const { stateList } = require('./state-list.js');
const { State } = require('../models/state.js');

const createState = async (stateObj) => {
  try {
    const state = await State.create({
      id: stateObj.ID,
      stateName: stateObj.StateName,
      dateCreated: stateObj.DateCreated,
      dateModified: stateObj.DateModified
    });
    // console.log(state);
  } catch(err) {
    console.log(err.name);
  }
};

stateList.forEach((state, index) => {
  createState(state);
})