"use strict"

const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");
const authService = require("../services/auth-service");

router.get("/", controller.get);
router.get("/:slug", controller.getBySlug);
router.post('/user/:id', authService.authorize, controller.getById);
router.get("/tags/:tag", controller.getByTag);
router.post("/", authService.isAdmin, controller.post);
router.put("/:id", authService.authorize, controller.put);
router.delete("/:id", authService.isAdmin, controller.delete);

module.exports = router;