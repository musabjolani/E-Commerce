const User = require("../models/userModel");

const addUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return "User added successfully";
};

module.exports = { addUser };
