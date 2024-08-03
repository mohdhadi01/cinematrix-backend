import { Router } from 'express';
import { getTrendingMovies, getMovieDetails } from '../controllers/moviesController';

const router = Router();

router.get('/trending', getTrendingMovies); // Route to get all movies
router.get('/:movieId', getMovieDetails); // Route to get a specific movie by ID

export default router;
