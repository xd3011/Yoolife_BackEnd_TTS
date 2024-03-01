const express = require("express");
import deviceController from "../app/controllers/deviceController"

const router = express.Router();

router.post("/control/:did", deviceController.controlDevice);

router.get("/:did", deviceController.getDevice);

module.exports = router;
