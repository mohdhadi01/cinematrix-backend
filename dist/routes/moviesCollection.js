"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesCollectionController_1 = require("../controllers/moviesCollectionController");
const router = (0, express_1.Router)();
router.use("/trending", moviesCollectionController_1.trendingMovies);
router.use("/top-rated", moviesCollectionController_1.topRatedMovies);
exports.default = router;
