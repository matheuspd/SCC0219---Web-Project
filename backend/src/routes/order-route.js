"use strict"

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require("../services/auth-service");

router.get("/", controller.getAll);
router.get("/user/:id", authService.authorize, controller.getByUserId);
router.get("/:id", authService.isAdmin, controller.getById);
router.post("/", controller.post);

module.exports = router;