const User = require('../models/user');

const getAllUsers = () => {
  // Implement logic to fetch all users from the database
  return User.find();
};

const removeUser = (userId) => {
  // Implement logic to remove a user from the database
  return User.findByIdAndRemove(userId);
};

module.exports = {
  getAllUsers,
  removeUser,
};
