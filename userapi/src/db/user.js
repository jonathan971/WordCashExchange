const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  authentication: {
    password: {
      type: String,
      required: true
    },
    salt: {
      type: String, 
      select: false
    },
    sessionToken: {
      type: String, 
      select: false
    } 
  }
});

const UserModel = mongoose.model('User', UserSchema);

const getUsers = () => UserModel.find();
const getUserByEmail = (email) => UserModel.findOne({ email });
const getUserBySessionToken = (sessionToken) => UserModel.findOne({'authentication.sessionToken': sessionToken});
const getUserById = (id) => UserModel.findById(id);
const createUser = (values) => new UserModel(values).save().then((user) => user.toObject());
const deleteUserById = (id) => UserModel.findByIdAndDelete(id);
const updateUserById = (id, values) => UserModel.findByIdAndUpdate(id, values, { new: true });

module.exports = {
  UserModel,
  getUsers,
  getUserByEmail,
  getUserBySessionToken,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById
};
