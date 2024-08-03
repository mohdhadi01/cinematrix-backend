"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTvShowDetails = exports.getTopRatedTvShows = void 0;
const tvShow_1 = __importDefault(require("../models/tvShow"));
const getTopRatedTvShows = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tvShows = yield tvShow_1.default.find(); // Retrieve all TV shows from the database
        res.json(tvShows);
    }
    catch (error) {
        console.error('Error fetching TV shows:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getTopRatedTvShows = getTopRatedTvShows;
const getTvShowDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tvShowId } = req.params;
    try {
        const tvShow = yield tvShow_1.default.findById(tvShowId); // Retrieve TV show by ID from the database
        if (!tvShow) {
            return res.status(404).json({ error: 'TV show not found' });
        }
        res.json(tvShow);
    }
    catch (error) {
        console.error('Error fetching TV show details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getTvShowDetails = getTvShowDetails;
