const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = Schema(
  {
    deliveryId: {
      type: Schema.Types.ObjectId,
      ref: "Delivery",
      required: true,
    },
    type: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = notificationSchema;
