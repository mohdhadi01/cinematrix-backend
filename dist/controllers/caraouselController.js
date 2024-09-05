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
exports.createCarousel = exports.getCarousel = void 0;
const carousel_1 = __importDefault(require("../models/carousel"));
const getCarousel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carouselList = yield carousel_1.default.find();
        res.send(carouselList);
    }
    catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getCarousel = getCarousel;
const createCarousel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carousels = req.body;
        const savedCarousels = yield carousel_1.default.insertMany(carousels);
        res.status(201).json(savedCarousels);
    }
    catch (error) {
        console.error("Error creating movie:", error);
        res.status(400).json({ error });
    }
});
exports.createCarousel = createCarousel;
