const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// app.use("/auth", require("./src/route/auth"));

app.listen(PORT, () => {
  console.log(`Express server running at port ${PORT}`);
});
