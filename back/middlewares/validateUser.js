const { userModel } = require("../models");

const validateUser = async (req, res, next) => {
  try {
    const { userId } = req.cookies;

    if (!userId) return res.sendStatus(401);

    const user = await userModel.findById(userId);
    req.user = user;
    next();
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = validateUser;
