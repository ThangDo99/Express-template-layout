const express = require("express");
const router = express.Router();

var controllerTrans = require("../controllers/transaction.controller.js")

router.get("/", controllerTrans.index);

router.get("/create", controllerTrans.getCreate);
router.post("/create", controllerTrans.postCreate);
router.get("/complete/:id", controllerTrans.complete);
module.exports = router;
