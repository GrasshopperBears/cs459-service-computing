const { deliveryModel, userModel } = require("../models");

const createDelivery = async (req, res) => {
  const { from, to } = req.body;
  if (!from || !to) return res.sendStatus(400);

  try {
    // TODO: 랜덤으로 realDeliveryId 배정 후 추가
    await deliveryModel.create({ from, to });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const assignDelivery = async (req, res) => {
  const { id, deliveryManId } = req.body;

  if (!id || !deliveryManId) return res.sendStatus(400);

  try {
    const deliveryMan = await userModel.findById(deliveryManId);
    if (!deliveryMan) return res.sendStatus(404);

    const delivery = await deliveryModel.findById(id);
    if (!delivery) return res.sendStatus(404);

    delivery.deliveredBy = deliveryManId;
    await delivery.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const completeDelivery = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.sendStatus(400);

  try {
    const delivery = await deliveryModel.findById(id);
    if (!delivery) return res.sendStatus(404);

    delivery.status = "complete";
    await delivery.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = { createDelivery, assignDelivery, completeDelivery };
