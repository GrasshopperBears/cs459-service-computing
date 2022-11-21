const express = require("express");
const router = express.Router();
const { assignDelivery, completeDelivery } = require("../services/delivery");

router.post("/assign", assignDelivery);
router.post("/complete", completeDelivery);

module.exports = router;
