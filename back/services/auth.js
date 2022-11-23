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

const login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await userModel.findOne({ id, password });
    res.cookie("userId", user._id.toString(), { httpOnly: true });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const logout = (_, res) => {
  res.clearCookie("userId");
  res.sendStatus(200);
};

module.exports = { signup, login, logout };
