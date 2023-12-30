
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

// Mettre à jour un utilisateur
exports.updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Supprimer un utilisateur
exports.deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};
