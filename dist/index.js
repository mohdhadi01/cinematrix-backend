"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./routes/movies"));
const tvShows_1 = __importDefault(require("./routes/tvShows"));
const DBconnect_1 = __importDefault(require("./DBconnect"));
const Carousel_1 = __importDefault(require("./routes/Carousel"));
const moviesCollection_1 = __importDefault(require("./routes/moviesCollection"));
const tvShowsCollection_1 = __importDefault(require("./routes/tvShowsCollection"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
(0, DBconnect_1.default)();
app.use("/movies", movies_1.default);
app.use("/movies-collection", moviesCollection_1.default);
app.use("/tvShows-collection", tvShowsCollection_1.default);
app.use("/tv-shows", tvShows_1.default);
app.use("/get-carousel", Carousel_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
