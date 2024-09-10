import { Router } from "express";
import { topRatedMovies, trendingMovies } from "../controllers/moviesCollectionController";

const router = Router();

router.use("/trending", trendingMovies);
router.use("/top-rated", topRatedMovies);


export default router;
