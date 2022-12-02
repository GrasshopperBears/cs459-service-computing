const express = require("express");
const router = express.Router();
const {
  getDeliveries,
  createDelivery,
  assignDelivery,
  completeDelivery,
} = require("../services/delivery");
const validateUser = require("../middlewares/validateUser");

router.get("/delivery", getDeliveries);
router.post("/create", createDelivery); // 어드민용
router.post("/assign", assignDelivery); // 어드민용
router.post("/complete", completeDelivery);

module.exports = router;
