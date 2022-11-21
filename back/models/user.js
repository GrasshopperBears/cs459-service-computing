const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true }, // 판매 회사, 구매자, 배송원
});

module.exports = userSchema;
