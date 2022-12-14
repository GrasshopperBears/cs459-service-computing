const { deliveryModel, notificationModel } = require("../models");

const getDeliveries = async (req, res) => {
  const { deliveredBy } = req.query;

  try {
    const deliveries = await deliveryModel.find(
      deliveredBy ? { deliveredBy } : {},
      [
        "from",
        "to",
        "date",
        "commodity",
        "additionalInfo",
        "deliveredBy",
        "status",
        "realDeliveryId",
      ]
    );
    res.json(deliveries);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createDelivery = async (req, res) => {
  const { from, to, date, commodity, additionalInfo } = req.body;
  if (!from || !to || !date || !commodity || !additionalInfo)
    return res.sendStatus(400);

  try {
    // TODO: 랜덤으로 realDeliveryId 배정 후 추가
    await deliveryModel.create({ from, to, date, commodity, additionalInfo });
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const assignDelivery = async (req, res) => {
  const { id, deliveredBy } = req.body;

  if (!id || !deliveredBy) return res.sendStatus(400);

  try {
    const delivery = await deliveryModel.findById(id);
    if (!delivery) return res.sendStatus(404);

    delivery.deliveredBy = deliveredBy;
    await delivery.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

const startDelivery = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.sendStatus(400);

  try {
    const delivery = await deliveryModel.findById(id);
    if (!delivery) return res.sendStatus(404);

    delivery.status = "start";
    await delivery.save();

    await notificationModel.create({
      type: "start",
      description: `${delivery.commodity}의 배달이 시작되었습니다. (배송원: ${delivery.deliveredBy})`,
    });

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

    await notificationModel.create({
      type: "complete",
      description: `${delivery.commodity}의 배달이 완료되었습니다.`,
    });

    res.sendStatus(200);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getDeliveries,
  createDelivery,
  assignDelivery,
  startDelivery,
  completeDelivery,
};
