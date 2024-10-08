import { Request, Response } from "express";
import carousel from "../models/carousel";

export const getCarousel = async (req: Request, res: Response) => {
  try {
    const carouselList = await carousel.find();
    res.send(carouselList);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createCarousel = async (req: Request, res: Response) => {
  try {
    const carousels = req.body;

    const movieIds = carousels.map((item: any) => item?.movieId);

    const existingCarousels = await carousel.find({
      movieId: { $in: movieIds },
    });

    const newCarousels = carousels.filter(
      (item: any) =>
        !existingCarousels.some((existing) => existing.movieId === item.movieId)
    );

    if (newCarousels.length === 0) {
      return res.status(400).json({ error: "No new unique movies to add." });
    }

    const savedCarousels = await carousel.insertMany(carousels);

    res.status(201).json(savedCarousels);
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(400).json({ error });
  }
};
