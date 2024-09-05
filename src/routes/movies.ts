import { Router } from "express";
import {
  getTrendingMovies,
  getMovieDetails,
  createMovie,
} from "../controllers/moviesController";

const router = Router();

router.get("/trending", getTrendingMovies);
router.get("/:movieId", getMovieDetails);
router.post("/trending", createMovie);

export default router;
