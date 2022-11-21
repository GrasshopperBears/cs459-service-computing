const express = require("express");
const router = express.Router();
const { getLogs, createLog } = require("../services/log");

router.get("/log", getLogs);
router.post("/log", createLog);

module.exports = router;
