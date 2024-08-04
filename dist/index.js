"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./routes/movies"));
const tvShows_1 = __importDefault(require("./routes/tvShows"));
const DBconnect_1 = __importDefault(require("./DBconnect"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json()); // Middleware to parse JSON
// Connect to the database
(0, DBconnect_1.default)();
// Middleware and routes setup here
app.use('/movies', movies_1.default);
app.use('/tv-shows', tvShows_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
