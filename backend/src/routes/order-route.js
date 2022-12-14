"use strict"

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require("../services/auth-service");

router.get("/", controller.getAll);
router.post("/user/:id", authService.authorize, controller.getByUserId);
router.post("/:id", authService.isAdmin, controller.getById);
router.post("/", authService.authorize, controller.post);
router.put("/", authService.authorize, controller.put);
router.delete("/:id", authService.authorize, controller.delete);

module.exports = router;