const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = Schema({
  from: { type: Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: Schema.Types.ObjectId, ref: "User", required: true },
  deliveredBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, default: "deliverStart" },
});

module.exports = deliverySchema;
