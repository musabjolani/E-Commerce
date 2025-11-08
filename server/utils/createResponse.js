const createResponse = (success, data = null, message = "") => ({
  success,
  data,
  message: message || (success ? "Operation successful" : "Operation failed"),
});

module.exports = {
  createResponse,
};
