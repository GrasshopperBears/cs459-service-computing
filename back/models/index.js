const mongoose = require("mongoose");

const userModel = require("./user");
const logModel = require("./log");
const deliveryModel = require("./delivery");

const database = mongoose.connection;
const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

database.on("error", console.error.bind(console, "mongoose connection error."));

database.on("open", () => {
  logger.info("데이터베이스와 연결되었습니다.");
});

database.on("error", function (err) {
  logger.error("데이터베이스 연결 에러 발생: " + err);
  mongoose.disconnect();
});

database.on("disconnected", function () {
  logger.error("데이터베이스와 연결이 끊어졌습니다.");
  setTimeout(() => {
    mongoose.connect(process.env.DB_PATH, connectOption);
  }, 5000);
});

mongoose.connect(process.env.DB_PATH, connectOption);

module.exports = {
  userModel: mongoose.model("User", userModel),
  logModel: mongoose.model("Log", logModel),
  deliveryModel: mongoose.model("Delivery", deliveryModel),
};
