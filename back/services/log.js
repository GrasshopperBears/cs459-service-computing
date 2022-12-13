const { logModel, notificationModel } = require("../models");

const getLogs = async (req, res) => {
  const { deliveryId } = req.query;

  try {
    const logs = await logModel.find(deliveryId ? { deliveryId } : {}, [
      "deliveryId",
      "address",
      "impact",
    ]);
    res.json(logs);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createLog = async (req, res) => {
  const { deliveryId, address, impact } = req.body;
  await logModel.create({ deliveryId, address, impact });
  await notificationModel.create({
    type: "event",
    description: "충격이 감지되었습니다.",
  });
  res.sendStatus(200);
};

module.exports = { createLog, getLogs };
