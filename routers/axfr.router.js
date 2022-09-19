const express = require("express");

const axfrController = require("../controllers/axfr.controller");
const axfrRouter = express.Router();

axfrRouter.get("/", axfrController.sendIndex);

module.exports = axfrRouter;