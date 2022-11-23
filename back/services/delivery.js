const { deliveryModel } = require("../models");

const createDelivery = (req, res) => {};

const assignDelivery = (req, res) => {};

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
