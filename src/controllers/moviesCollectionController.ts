import { Request, Response } from "express";
import Movies from "../models/moviesSchema";

export const trendingMovies = async (req: Request, res: Response) => {
  try {
    const MoviesList = await Movies.find({ isTrending: true });
    res.json(MoviesList);
  } catch (error) {
    console.error("Error fetching trending-movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const topRatedMovies = async (req: Request, res: Response) => {
  try {
    const MoviesList = await Movies.find({ isTopRated: true });
    res.json(MoviesList);
  } catch (error) {
    console.error("Error fetching toprated-movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
