const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../services/auth");
const validateUser = require("../middlewares/validateUser");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", validateUser, logout);

module.exports = router;
