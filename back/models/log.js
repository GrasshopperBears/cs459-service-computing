const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = Schema({
  deliveryId: { type: Schema.Types.ObjectId, ref: "Delivery", required: true },
  type: { type: String, required: true },
  description: { type: String },
});

module.exports = logSchema;
