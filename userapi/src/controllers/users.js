const express = require('express');
const { deleteUserById, getUserById, getUsers } = require('../db/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const { id } = req.params;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    if (!user) {
      return res.sendStatus(404);
    }

    user.username = username;
    await user.save();

    return res.status(200).json(user).end();

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = { getAllUsers, deleteUser, updateUser };
