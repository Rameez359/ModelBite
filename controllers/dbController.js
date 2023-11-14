const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const dbname = process.env.DB_NAME;
const url = `mongodb+srv://${username}:${password}@cluster0.yznsam2.mongodb.net/${dbname}?retryWrites=true&w=majority/modelBite`;
const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
async function connectTOMongoDB() {
  await mongoose.connect(url, params);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}

module.exports = { connectTOMongoDB };
