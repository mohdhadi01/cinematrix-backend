import { Request, Response } from 'express';
import TVShow from '../models/tvShow';

export const getTopRatedTvShows = async (req: Request, res: Response) => {
  try {
    const tvShows = await TVShow.find(); // Retrieve all TV shows from the database
    res.json(tvShows);
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getTvShowDetails = async (req: Request, res: Response) => {
  const { tvShowId } = req.params;

  try {
    const tvShow = await TVShow.findById(tvShowId); // Retrieve TV show by ID from the database
    if (!tvShow) {
      return res.status(404).json({ error: 'TV show not found' });
    }
    res.json(tvShow);
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
