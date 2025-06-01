
import moviesData from './moviesData.json';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  category: string;
  description: string;
  quality: string;
  duration: string;
  director?: string;
  cast?: string[];
  language?: string;
  downloadUrls?: {
    '4K': string;
    '1080p': string;
    '720p': string;
    '480p': string;
  };
  streamUrl?: string;
  trailerUrl?: string;
}

export const movieData: Movie[] = moviesData.movies;
export const categories = moviesData.categories;
export const genres = moviesData.genres;
export const qualities = moviesData.qualities;
export const languages = moviesData.languages;
