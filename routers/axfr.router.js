const express = require("express");

const axfrController = require("../controllers/axfr.controller");
const axfrRouter = express.Router();

axfrRouter.get("/", axfrController.sendIndex);
axfrRouter.get("/se", axfrController.sendSeDates)
axfrRouter.get("/se/:date/:page", axfrController.sendSeRows);

module.exports = axfrRouter;