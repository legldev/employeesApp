const dotenv = require("dotenv");
const mongoose = require("mongoose");
const logger = require("../tools/logger");

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

dotenv.config();
const mongoSrvDBURL = process.env.MONGODB_URL;

const url = mongoSrvDBURL;

mongoose.connect(url, connectionOptions).catch((e) => {
  logger.log({
    level: "error",
    message: "Connection error",
    info: e.message,
  });
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db;
