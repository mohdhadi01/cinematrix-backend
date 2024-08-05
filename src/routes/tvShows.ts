import { Router } from 'express';
import { getTopRatedTvShows, getTvShowDetails } from '../controllers/tvShowsController';

const router = Router();

router.get('/top-rated', getTopRatedTvShows); 
router.get('/:tvShowId', getTvShowDetails); 

export default router;
