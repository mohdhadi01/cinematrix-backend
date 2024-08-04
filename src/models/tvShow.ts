import mongoose, { Schema, Document } from 'mongoose';

interface Genre {
  id?: number;
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
  name?: string;
  overview?: string;
  poster_path?: string;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
}

interface TVShow extends Document {
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  backdrop_path?: string;
  genres?: Genre[];
  original_language?: string;
  original_name?: string;
  popularity?: number;
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
  name: { type: String, required: false },
  overview: { type: String, required: false },
  poster_path: { type: String, required: false },
  first_air_date: { type: String, required: false },
  vote_average: { type: Number, required: false },
  vote_count: { type: Number, required: false },
});

const TVShowSchema: Schema = new Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
  overview: { type: String, required: false },
  poster_path: { type: String, required: false },
  first_air_date: { type: String, required: false },
  vote_average: { type: Number, required: false },
  vote_count: { type: Number, required: false },
  backdrop_path: { type: String, required: false },
  genres: { type: [GenreSchema], required: false },
  original_language: { type: String, required: false },
  original_name: { type: String, required: false },
  popularity: { type: Number, required: false },
  production_companies: { type: [ProductionCompanySchema], required: false },
  production_countries: { type: [ProductionCountrySchema], required: false },
  spoken_languages: { type: [SpokenLanguageSchema], required: false },
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

export default mongoose.model<TVShow>('TVShow', TVShowSchema);
