var express = require("express");
var router = express.Router();

const { createProject } = require("../controllers/userController");

/* GET users listing. */
router.post("/postProject", async function (req, res, next) {
  try{
    const payload = req.body;
    const result = await createProject(payload);
    res.status(result?.statusCode).json({ response: result.response });
  }catch(error){
    res.status(500).json({ "Exception": `Exception in post project: ${error}` }, { statusCode: 500 });
  }


});

module.exports = router;
