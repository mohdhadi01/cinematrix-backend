import { Router } from 'express';
import { getTopRatedTvShows, getTvShowDetails } from '../controllers/tvShowsController';

const router = Router();

router.get('/top-rated', getTopRatedTvShows); // Route to get all TV shows
router.get('/:tvShowId', getTvShowDetails); // Route to get a specific TV show by ID

export default router;
