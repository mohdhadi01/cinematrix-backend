import { Request, Response } from "express";
import TvShows from "../models/tvShowsSchema";

export const trendingShows = async (req: Request, res: Response) => {
  try {
    const MoviesList = await TvShows.find({ isTrending: true });
    res.json(MoviesList);
  } catch (error) {
    console.error("Error fetching trending-movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const topRatedShows = async (req: Request, res: Response) => {
  try {
    const MoviesList = await TvShows.find({ isTopRated: true });
    res.json(MoviesList);
  } catch (error) {
    console.error("Error fetching toprated-movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
