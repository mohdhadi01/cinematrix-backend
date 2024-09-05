"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tvShowsController_1 = require("../controllers/tvShowsController");
const router = (0, express_1.Router)();
router.get('/top-rated', tvShowsController_1.getTopRatedTvShows);
router.get('/:tvShowId', tvShowsController_1.getTvShowDetails);
exports.default = router;
