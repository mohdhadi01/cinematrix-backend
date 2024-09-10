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
exports.topRatedMovies = exports.trendingMovies = void 0;
const moviesSchema_1 = __importDefault(require("../models/moviesSchema"));
const trendingMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MoviesList = yield moviesSchema_1.default.find({ isTrending: true });
        res.json(MoviesList);
    }
    catch (error) {
        console.error("Error fetching trending-movies:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.trendingMovies = trendingMovies;
const topRatedMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MoviesList = yield moviesSchema_1.default.find({ isTopRated: true });
        res.json(MoviesList);
    }
    catch (error) {
        console.error("Error fetching toprated-movies:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.topRatedMovies = topRatedMovies;
