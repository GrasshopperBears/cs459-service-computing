const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, requred: true },
  commodity: { type: String, required: true },
  additionalInfo: { type: String, required: true },
  deliveredBy: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "deliverStart" },
  realDeliveryId: { type: String },
});

module.exports = deliverySchema;
