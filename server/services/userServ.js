const UserRep = require("../repositories/userRep");
const { createResponse } = require("../utils/createResponse");

const getAllUsers = async () => {
  try {
    const users = await UserRep.getAllUsers();
    return createResponse(true, users, "Users retrieved");
  } catch (error) {
    console.error("getAllUsers error:", error);
    return createResponse(
      false,
      null,
      `Failed to retrieve users: ${error.message}`
    );
  }
};

const getUserById = async (userId) => {
  try {
    if (!userId) return createResponse(false, null, "User ID is required");

    const user = await UserRep.getUserById(userId);
    if (!user)
      return createResponse(false, null, `User with ID ${userId} not found`);

    return createResponse(true, user, "User retrieved");
  } catch (error) {
    console.error("getUserById error:", error);
    return createResponse(
      false,
      null,
      `Failed to retrieve user: ${error.message}`
    );
  }
};

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

const updateUser = async (userId, userData) => {
  try {
    if (!userId) return createResponse(false, null, "User ID is required");

    const updatedUser = await UserRep.updateUser(userId, userData);
    if (!updatedUser)
      return createResponse(false, null, `User with ID ${userId} not found`);

    return createResponse(true, updatedUser, "User updated successfully");
  } catch (error) {
    console.error("updateUser error:", error);
    return createResponse(
      false,
      null,
      `Failed to update user: ${error.message}`
    );
  }
};

const deleteUser = async (userId) => {
  try {
    if (!userId) return createResponse(false, null, "User ID is required");

    const deletedUser = await UserRep.deleteUser(userId);
    if (!deletedUser)
      return createResponse(false, null, `User with ID ${userId} not found`);

    return createResponse(true, deletedUser, "User deleted successfully");
  } catch (error) {
    console.error("deleteUser error:", error);
    return createResponse(
      false,
      null,
      `Failed to delete user: ${error.message}`
    );
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
