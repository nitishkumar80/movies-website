import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, Star, Calendar, Clock, Eye, MessageCircle, Share2, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { movieData } from '../data/movies';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movieData.find(m => m.id === parseInt(id || '0'));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Movie Not Found</h1>
          <Link to="/" className="text-red-500 hover:text-red-400">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const telegramNumber = "+1234567890";

  const downloadOptions = [
    { quality: '4K UHD', size: '2.5GB', url: movie.downloadUrls?.['4K'] || '#' },
    { quality: 'HD 1080p', size: '1.2GB', url: movie.downloadUrls?.['1080p'] || '#' },
    { quality: 'HD 720p', size: '700MB', url: movie.downloadUrls?.['720p'] || '#' },
    { quality: 'Mobile 480p', size: '300MB', url: movie.downloadUrls?.['480p'] || '#' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm="" setSearchTerm={() => {}} selectedCategory="All" setSelectedCategory={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Movies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1489599808984-e025ac6f5661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                  {movie.quality}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/70 rounded-lg px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{movie.rating}</span>
                </div>
              </div>
            </Card>

            <div className="mt-6 space-y-3">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open(movie.streamUrl || '#', '_blank')}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Now
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-600 text-black hover:bg-gray-800 hover:text-white"
                onClick={() => window.open(movie.downloadUrls?.['1080p'] || '#', '_blank')}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Movie
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-black hover:bg-gray-800 hover:text-white">
                <a 
                  href={`https://t.me/${telegramNumber.replace('+', '')}`} 
                  className="flex items-center justify-center w-full"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact on Telegram
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  {movie.director && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{movie.director}</span>
                    </div>
                  )}
                  {movie.language && (
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>{movie.language}</span>
                    </div>
                  )}
                  <Badge variant="secondary">{movie.genre}</Badge>
                  <Badge variant="outline" className='text-white'>{movie.category}</Badge>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {movie.description}
                </p>
              </div>

              {movie.cast && movie.cast.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">Cast</h2>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map((actor, index) => (
                      <Badge key={index} variant="outline" className="text-sm text-white">
                        {actor}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{movie.rating}</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <Eye className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">1.2M</div>
                    <div className="text-sm text-gray-400">Views</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <Download className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">850K</div>
                    <div className="text-sm text-gray-400">Downloads</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <MessageCircle className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">2.5K</div>
                    <div className="text-sm text-gray-400">Comments</div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Download Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {downloadOptions.map((option, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-white">{option.quality}</h3>
                            <p className="text-sm text-gray-400">Quality • {option.size}</p>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
                            onClick={() => window.open(option.url, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Share This Movie</h2>
                <div className="flex space-x-3">
                <Button 
  variant="outline" 
  size="sm" 
  className="border-gray-600 text-black hover:bg-gray-800 hover:text-white group"
  onClick={() => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        console.log("Link copied!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  }}
>
  <Share2 className="h-4 w-4 mr-2 text-black group-hover:text-white" />
  Copy Link
</Button>
                  <Button variant="outline" size="sm" className="border-gray-600 hover:bg-gray-800">
                    <a 
                      href={`https://t.me/share/url?url=${window.location.href}&text=Check out ${movie.title}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-black hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Share on Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetails;
