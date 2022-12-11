const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: String, requred: true },
  commodity: { type: String, required: true },
  additionalInfo: { type: String, required: true },
  deliveredBy: { type: String },
  status: { type: String, default: "before" },
  realDeliveryId: { type: String },
});

module.exports = deliverySchema;
