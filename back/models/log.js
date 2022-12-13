const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = Schema({
  deliveryId: { type: Schema.Types.ObjectId, ref: "Delivery", required: true },
  address: { type: String, required: true },
  impact: { type: Number, required: true },
});

module.exports = logSchema;
