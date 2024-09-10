"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tvShowsCollectionController_1 = require("../controllers/tvShowsCollectionController");
const router = (0, express_1.Router)();
router.use("/trending", tvShowsCollectionController_1.trendingShows);
router.use("/top-rated", tvShowsCollectionController_1.topRatedShows);
exports.default = router;
