const User = require("../models/userModel");

const addUser = async (userData) => {
  try {
    if (!userData || !userData.userName || !userData.password) {
      return createResponse(false, null, "userName and password are required");
    }

    // Optionally check for existing username
    if (UserRep.findByUserName) {
      const existing = await UserRep.findByUserName(userData.userName);
      if (existing)
        return createResponse(false, null, "Username already exists");
    }
    const newUser = await UserRep.addUser(userData);
    return createResponse(true, newUser, "User created successfully");
  } catch (error) {
    console.error("addUser error:", error);
    return createResponse(false, null, `Failed to add user: ${error.message}`);
  }
};
module.exports = { addUser };
