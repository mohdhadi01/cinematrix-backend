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
exports.createMovie = exports.getMovieDetails = exports.getTrendingMovies = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const getTrendingMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movie_1.default.find();
        res.json(movies);
    }
    catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getTrendingMovies = getTrendingMovies;
const getMovieDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { movieId } = req.params;
    try {
        const movie = yield movie_1.default.findById(movieId);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(movie);
    }
    catch (error) {
        console.error("Error fetching movie details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getMovieDetails = getMovieDetails;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new movie_1.default(req.body);
        const savedMovie = yield movie.save();
        res.status(201).json(savedMovie);
    }
    catch (error) {
        console.error("Error creating movie:", error);
        res.status(400).json({ error });
    }
});
exports.createMovie = createMovie;
