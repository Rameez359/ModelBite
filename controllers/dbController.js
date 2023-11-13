const mongoose = require('mongoose');
// require('dotenv').config();

const username = process.env.username;
const password = process.env.password;
const url = `mongodb+srv://${username}:${password}@cluster0.yznsam2.mongodb.net/?retryWrites=true&w=majority/modelBite`;

const connectTOMongoDB = async () => {
    await mongoose.connect(url);
    console.log("Database Connected Successfully");
}

module.exports =  connectTOMongoDB