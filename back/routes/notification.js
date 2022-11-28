const express = require("express");
const router = express.Router();
const { getNotifications } = require("../services/notification");

router.get("/notification", getNotifications);

module.exports = router;
