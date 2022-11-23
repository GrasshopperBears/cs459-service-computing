const express = require("express");
const router = express.Router();
const {
  createDelivery,
  assignDelivery,
  completeDelivery,
} = require("../services/delivery");
const validateUser = require("../middlewares/validateUser");

router.post("/create", createDelivery); // 어드민용
router.post("/assign", assignDelivery); // 어드민용
router.post("/complete", validateUser, completeDelivery);

module.exports = router;
