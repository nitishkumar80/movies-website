
import React, { useState } from 'react';
import { Play, Info, Star, Download, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="bg-gray-800 border-gray-700 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Movie Poster */}
          <img
            src={movie.image}
            alt={movie.title}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1489599808984-e025ac6f5661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
            }}
          />
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse" />
          )}

          {/* Quality Badge */}
          <Badge className="absolute top-2 left-2 bg-red-600 text-white">
            {movie.quality}
          </Badge>

          {/* Rating */}
          <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/70 rounded-lg px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{movie.rating}</span>
          </div>

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="text-center space-y-3">
              <Button 
                size="sm" 
                className="bg-red-600 hover:bg-red-700 text-white rounded-full"
              >
                <Play className="h-4 w-4 mr-1" />
                Play
              </Button>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="rounded-full p-2">
                  <Info className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full p-2">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-white text-sm mb-2 line-clamp-1 group-hover:text-red-400 transition-colors">
            {movie.title}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{movie.duration}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {movie.description}
          </p>

          <Badge variant="secondary" className="text-xs">
            {movie.genre}
          </Badge>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;
