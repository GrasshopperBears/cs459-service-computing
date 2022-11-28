const { notificationModel } = require("../models");

const createNotifiaction = async (type, description) => {
  try {
    await notificationModel.create({ type, description });
  } catch (e) {
    return false;
  }
  return true;
};

const getNotifications = async (req, res) => {
  try {
    const notifications = await notificationModel.find({});
    res.json(notifications);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = { createNotifiaction, getNotifications };
