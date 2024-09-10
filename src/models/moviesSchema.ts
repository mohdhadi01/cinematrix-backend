import mongoose, { Schema } from "mongoose";

interface moviesSchemaInterface {
  title: string;
  poster_path: string;
  isTrending: boolean;
  isTopRated: boolean;
}

const moviesSchema = new Schema<moviesSchemaInterface>({
  title: { type: String, required: true },
  poster_path: { type: String, required: true },
  isTrending: { type: Boolean, default: false },
  isTopRated: { type: Boolean, default: false },
});

export default mongoose.model<moviesSchemaInterface>("Movies", moviesSchema);
