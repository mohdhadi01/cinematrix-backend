import mongoose, { Schema } from "mongoose";

interface tvShowsSchemaInterface {
  title: string;
  poster_path: string;
  isTrending: boolean;
  isTopRated: boolean;
}

const tvShowsSchema = new Schema<tvShowsSchemaInterface>({
  title: { type: String, required: true },
  poster_path: { type: String, required: true },
  isTrending: { type: Boolean, default: false },
  isTopRated: { type: Boolean, default: false },
});

export default mongoose.model<tvShowsSchemaInterface>("TvShows", tvShowsSchema);
