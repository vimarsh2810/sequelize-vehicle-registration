const responseObj = (status, success, message, payload, accessToken) => {
  return {
    status,
    success, 
    message,
    payload,
    accessToken
  };
};

module.exports = { responseObj };