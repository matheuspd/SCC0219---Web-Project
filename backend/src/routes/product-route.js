"use strict"

const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");
const authService = require("../services/auth-service");

router.get("/", controller.get);
router.get("/:slug", controller.getBySlug);
router.post('/admin/:id', authService.isAdmin, controller.getById);
router.get("/tags/:tag", controller.getByTag);
router.post("/", authService.isAdmin, controller.post);
router.put("/:id", authService.isAdmin, controller.put);
router.delete("/:id", authService.isAdmin, controller.delete);

module.exports = router;