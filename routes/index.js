var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Abc");
  res.render('index', { title: 'Express' });
});

router.get('/400', function(req, res, next) {
  console.log("Abc");
  res.sendStatus(400);
});
router.get('/500', function(req, res, next) {
  res.sendStatus(500);
});
module.exports = router;
