const { userModel } = require("../models");

const signup = async (req, res) => {
  const { id, password, name, type } = req.body;

  if (!id || !password || !name || !type) return res.sendStatus(400);

  try {
    await userModel.create({ id, password, name, type });
    console.log(`User created: name=${name}`);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const login = (req, res) => {};

const logout = (req, res) => {};

module.exports = { signup, login, logout };
