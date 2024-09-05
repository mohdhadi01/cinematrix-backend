import mongoose, { Schema } from "mongoose";

interface Carousel {
  title: String;
  overview: String;
  rating: String;
  backdrop_path: String;
  poster_path: String;
}

const CarouselSchema = new Schema<Carousel>({
  title: { type: String, required: true },
  overview: { type: String, required: true },
  rating: { type: String, required: true },
  backdrop_path: { type: String, required: true },
  poster_path: { type: String, required: true },
});

export default mongoose.model<Carousel>("Carousel", CarouselSchema);
