"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const router = (0, express_1.Router)();
router.get("/trending", moviesController_1.getTrendingMovies);
router.get("/:movieId", moviesController_1.getMovieDetails);
router.post("/trending", moviesController_1.createMovie);
exports.default = router;
