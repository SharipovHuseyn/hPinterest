const express = require("express"),
  app = express(),
  jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");

const userRouter = require("./routes/user.routes");
const pinRouter = require("./routes/pin.routes");

const host = "127.0.0.1";
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

app.use("/api", userRouter);
app.use("/api", pinRouter);


app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);
