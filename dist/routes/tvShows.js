"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tvShowsController_1 = require("../controllers/tvShowsController");
const router = (0, express_1.Router)();
router.get('/top-rated', tvShowsController_1.getTopRatedTvShows); // Route to get all TV shows
router.get('/:tvShowId', tvShowsController_1.getTvShowDetails); // Route to get a specific TV show by ID
exports.default = router;
