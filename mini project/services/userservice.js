const User = require('../models/user');


const addUser = async (userData) => {
  try {
    /*const user = new User({
      name,
      email,
      password,
      role,
      age,
      mobileNo,
      gender,
      username
    }); */
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserById = (userId) => {
  return User.findById(userId);
};

const updateUser = async (userId, updatedData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllUsers = async() => {
  // Implement logic to fetch all users from the database
  return await User.find();
};

const removeUser = async (userId) => {
  try {
    const removedUser = await User.findOneAndDelete({ _id: userId });
    if (!removedUser) {
      throw new Error('User not found');
    }
    return removedUser;
  } catch (error) {
    console.error('Error removing user:', error.message);
    throw error;
  }
};

module.exports = {
  addUser,
  getAllUsers,
  removeUser,
  getUserById,
  updateUser
};

