var express = require("express");
var router = express.Router();
const axios = require("axios");

const expressWinston = require("express-winston");
const { transports, format } = require("winston");

const { logger } = require("../logger/logger");

// const servers = ["http://localhost:3000", "http://localhost:3002"];

// let current = 0,
//   server;
// const handler = async (req, res) => {
//   const { method, url, headers, body: data } = req;
//   server = servers[current];
//   current === servers.length - 1 ? (current = 0) : current++;
//   try {
//     const response = await axios({
//       url: `${server}${url}`,
//       method,
//       headers,
//       data
//     })
//     console.log(`Proxy to  ${server} succeded`)
//     res.send(response.data)
//   }catch(error){
//     console.log(` ${error}`)
//     console.log(`Proxy to  ${server} Failed`)
//     handler(req, res)
//   }
// };

// router.use((req, res) => { handler(req, res)})

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Abc");
  res.render("index", { title: "Express" });
 });

router.get("/400", function (req, res, next) {
  logger.warn("This is a bad request");
  res.sendStatus(400);
});
router.get("/500", function (req, res, next) {
  res.sendStatus(500);
});
router.get("/error", function (req, res, next) {
  throw new Error("This is a custom error");
});

const myformat = format.printf(({ level, meta, timestamp }) => {
  return `${timestamp} ${level}: ${meta.message}`;
});

// router.use(
//   expressWinston.errorLogger({
//     transports: [
//       new transports.File({
//         filename: "./logger/logsInternalError.log",
//       }),
//     ],
//     format: format.combine(format.json(), format.timestamp(), myformat),
//   })
// );
module.exports = router;
