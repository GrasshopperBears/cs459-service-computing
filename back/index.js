const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = 4000;
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use(require("./routes/auth"));
app.use(require("./routes/log"));
app.use(require("./routes/delivery"));
app.use(require("./routes/notification"));

app.listen(PORT, () => {
  console.log(`Express server running at port ${PORT}`);
});
