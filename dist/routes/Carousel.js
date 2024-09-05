"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const caraouselController_1 = require("../controllers/caraouselController");
const router = (0, express_1.Router)();
router.get("/", caraouselController_1.getCarousel);
router.post("/", caraouselController_1.createCarousel);
exports.default = router;
