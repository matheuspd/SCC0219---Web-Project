"use strict"

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require("../services/auth-service");

router.post("/", controller.post);
router.post("/authenticate", controller.authenticate);
router.post("/refresh-token", authService.authorize, controller.refreshToken);
router.post("/:username", authService.isAdmin, controller.getByUsername);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", authService.authorize, controller.put);
router.delete("/:id", authService.isAdmin, controller.delete);

module.exports = router;