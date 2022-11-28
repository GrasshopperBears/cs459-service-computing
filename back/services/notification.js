const { notificationModel } = require("../models");

const getNotifications = async (req, res) => {
  try {
    const notifications = await notificationModel.find({});
    res.json(notifications);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = { getNotifications };
