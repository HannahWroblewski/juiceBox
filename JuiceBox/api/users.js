const express = require('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

const { getAllUsers } = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  try {const users = await getAllUsers();

  res.send({
    users
  });} catch (err) {
    console.log(err)
  }
});

module.exports = usersRouter;