import mongoose, { Schema, Document } from 'mongoose';

interface Genre {
  id?: number;
  name?: string;
}

interface ProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

interface Cast {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

interface Video {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: Date;
  id?: string;
}

interface Similar {
  id?: number;
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}

interface Collection {
  id?: number;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
}

interface Movie extends Document {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: Collection;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  credits?: {
    cast?: Cast[];
  };
  videos?: {
    results?: Video[];
  };
  similar?: {
    results?: Similar[];
  };
}

const GenreSchema: Schema = new Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
});

const ProductionCompanySchema: Schema = new Schema({
  id: { type: Number, required: false },
  logo_path: { type: String, required: false },
  name: { type: String, required: false },
  origin_country: { type: String, required: false },
});

const ProductionCountrySchema: Schema = new Schema({
  iso_3166_1: { type: String, required: false },
  name: { type: String, required: false },
});

const SpokenLanguageSchema: Schema = new Schema({
  english_name: { type: String, required: false },
  iso_639_1: { type: String, required: false },
  name: { type: String, required: false },
});

const CastSchema: Schema = new Schema({
  adult: { type: Boolean, required: false },
  gender: { type: Number, required: false },
  id: { type: Number, required: false },
  known_for_department: { type: String, required: false },
  name: { type: String, required: false },
  original_name: { type: String, required: false },
  popularity: { type: Number, required: false },
  profile_path: { type: String, required: false },
  cast_id: { type: Number, required: false },
  character: { type: String, required: false },
  credit_id: { type: String, required: false },
  order: { type: Number, required: false },
});

const VideoSchema: Schema = new Schema({
  iso_639_1: { type: String, required: false },
  iso_3166_1: { type: String, required: false },
  name: { type: String, required: false },
  key: { type: String, required: false },
  site: { type: String, required: false },
  size: { type: Number, required: false },
  type: { type: String, required: false },
  official: { type: Boolean, required: false },
  published_at: { type: Date, required: false },
  id: { type: String, required: false },
});

const SimilarSchema: Schema = new Schema({
  id: { type: Number, required: false },
  title: { type: String, required: false },
  overview: { type: String, required: false },
  poster_path: { type: String, required: false },
  release_date: { type: String, required: false },
  vote_average: { type: Number, required: false },
  vote_count: { type: Number, required: false },
});

const CollectionSchema: Schema = new Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
  poster_path: { type: String, required: false },
  backdrop_path: { type: String, required: false },
});

const MovieSchema: Schema = new Schema({
  adult: { type: Boolean, required: false },
  backdrop_path: { type: String, required: false },
  belongs_to_collection: { type: CollectionSchema, required: false },
  budget: { type: Number, required: false },
  genres: { type: [GenreSchema], required: false },
  homepage: { type: String, required: false },
  id: { type: Number, required: false },
  imdb_id: { type: String, required: false },
  origin_country: { type: [String], required: false },
  original_language: { type: String, required: false },
  original_title: { type: String, required: false },
  overview: { type: String, required: false },
  popularity: { type: Number, required: false },
  poster_path: { type: String, required: false },
  production_companies: { type: [ProductionCompanySchema], required: false },
  production_countries: { type: [ProductionCountrySchema], required: false },
  release_date: { type: String, required: false },
  revenue: { type: Number, required: false },
  runtime: { type: Number, required: false },
  spoken_languages: { type: [SpokenLanguageSchema], required: false },
  status: { type: String, required: false },
  tagline: { type: String, required: false },
  title: { type: String, required: false },
  video: { type: Boolean, required: false },
  vote_average: { type: Number, required: false },
  vote_count: { type: Number, required: false },
  credits: {
    cast: { type: [CastSchema], required: false },
  },
  videos: {
    results: { type: [VideoSchema], required: false },
  },
  similar: {
    results: { type: [SimilarSchema], required: false },
  },
});

export default mongoose.model<Movie>('Movie', MovieSchema);
