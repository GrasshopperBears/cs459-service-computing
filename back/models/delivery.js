const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = Schema({
  from: { type: Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: Schema.Types.ObjectId, ref: "User", required: true },
  deliveredBy: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "deliverStart" },
  realDeliveryId: { type: String },
});

module.exports = deliverySchema;
