"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const GenreSchema = new mongoose_1.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: false },
});
const ProductionCompanySchema = new mongoose_1.Schema({
    id: { type: Number, required: false },
    logo_path: { type: String, required: false },
    name: { type: String, required: false },
    origin_country: { type: String, required: false },
});
const ProductionCountrySchema = new mongoose_1.Schema({
    iso_3166_1: { type: String, required: false },
    name: { type: String, required: false },
});
const SpokenLanguageSchema = new mongoose_1.Schema({
    english_name: { type: String, required: false },
    iso_639_1: { type: String, required: false },
    name: { type: String, required: false },
});
const CastSchema = new mongoose_1.Schema({
    adult: { type: Boolean, required: false },
    gender: { type: Number, required: false },
    id: { type: Number, required: false },
    known_for_department: { type: String, required: false },
    name: { type: String, required: false },
    original_name: { type: String, required: false },
    popularity: { type: Number, required: false },
    profile_path: { type: String, required: false },
    cast_id: { type: Number, required: false },
    character: { type: String, required: false },
    credit_id: { type: String, required: false },
    order: { type: Number, required: false },
});
const VideoSchema = new mongoose_1.Schema({
    iso_639_1: { type: String, required: false },
    iso_3166_1: { type: String, required: false },
    name: { type: String, required: false },
    key: { type: String, required: false },
    site: { type: String, required: false },
    size: { type: Number, required: false },
    type: { type: String, required: false },
    official: { type: Boolean, required: false },
    published_at: { type: Date, required: false },
    id: { type: String, required: false },
});
const SimilarSchema = new mongoose_1.Schema({
    id: { type: Number, required: false },
    title: { type: String, required: false },
    overview: { type: String, required: false },
    poster_path: { type: String, required: false },
    release_date: { type: String, required: false },
    vote_average: { type: Number, required: false },
    vote_count: { type: Number, required: false },
});
const CollectionSchema = new mongoose_1.Schema({
    id: { type: Number, required: false },
    name: { type: String, required: false },
    poster_path: { type: String, required: false },
    backdrop_path: { type: String, required: false },
});
const MovieSchema = new mongoose_1.Schema({
    adult: { type: Boolean, required: false },
    backdrop_path: { type: String, required: false },
    belongs_to_collection: { type: CollectionSchema, required: false },
    budget: { type: Number, required: false },
    genres: { type: [GenreSchema], required: false },
    homepage: { type: String, required: false },
    id: { type: Number, required: false },
    imdb_id: { type: String, required: false },
    origin_country: { type: [String], required: false },
    original_language: { type: String, required: false },
    original_title: { type: String, required: false },
    overview: { type: String, required: false },
    popularity: { type: Number, required: false },
    poster_path: { type: String, required: false },
    production_companies: { type: [ProductionCompanySchema], required: false },
    production_countries: { type: [ProductionCountrySchema], required: false },
    release_date: { type: String, required: false },
    revenue: { type: Number, required: false },
    runtime: { type: Number, required: false },
    spoken_languages: { type: [SpokenLanguageSchema], required: false },
    status: { type: String, required: false },
    tagline: { type: String, required: false },
    title: { type: String, required: false },
    video: { type: Boolean, required: false },
    vote_average: { type: Number, required: false },
    vote_count: { type: Number, required: false },
    credits: {
        cast: { type: [CastSchema], required: false },
    },
    videos: {
        results: { type: [VideoSchema], required: false },
    },
    similar: {
        results: { type: [SimilarSchema], required: false },
    },
});
exports.default = mongoose_1.default.model('Movie', MovieSchema);
