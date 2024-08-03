import { Request, Response } from 'express';
import Movie from '../models/movie';

export const getTrendingMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find(); // Retrieve all movies from the database
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMovieDetails = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const movie = await Movie.findById(movieId); // Retrieve movie by ID from the database
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
