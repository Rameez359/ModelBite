var express = require("express");
var router = express.Router();

const { createProject } = require("../controllers/userController");
const { connectTOMongoDB } = require("../controllers/dbController");

const mongoose = require("mongoose");
require('dotenv').config();

const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const url = `mongodb+srv://${username}:${password}@cluster0.yznsam2.mongodb.net/?retryWrites=true&w=majority/modelBite`;

// router.use(connectTOMongoDB)
/* GET users listing. */
router.post("/postProject", async function (req, res, next) {
  try{
    const payload = req.body;
    await mongoose.connect(url);
    const result = await createProject(payload);
    res.status(result?.statusCode).json({ response: result.response });
  }catch(error){
    res.status(500).json({ "Exception": `Exception in post project: ${error}` }, { statusCode: 500 });
  }
});

module.exports = router;
