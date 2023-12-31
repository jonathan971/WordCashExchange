const User = require('../models/user');

// Créer un nouvel utilisateur
exports.createUser = async (userData) => {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
};

// Récupérer tous les utilisateurs
exports.getAllUsers = async () => {
    return await User.find({});
};

// Récupérer un utilisateur par e-mail
exports.getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Mettre à jour un utilisateur par ID
exports.updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Supprimer un utilisateur par e-mail
exports.deleteUserByEmail = async (email) => {
    return await User.findOneAndDelete({ email });
};
