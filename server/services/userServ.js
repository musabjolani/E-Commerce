let usersRep = require("../repositories/userRep");

let addUser = async (userData) => {
  return await usersRep.addUser(userData);
};

module.exports = { addUser };
