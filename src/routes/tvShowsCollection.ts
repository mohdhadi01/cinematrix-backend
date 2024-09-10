import { Router } from "express";
import {
  topRatedShows,
  trendingShows,
} from "../controllers/tvShowsCollectionController";

const router = Router();

router.use("/trending", trendingShows);
router.use("/top-rated", topRatedShows);

export default router;
