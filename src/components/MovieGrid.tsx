
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
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
}

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Content</h2>
          <p className="text-gray-400">Discover the latest movies and TV shows</p>
        </div>
        
        {movies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No movies found. Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
