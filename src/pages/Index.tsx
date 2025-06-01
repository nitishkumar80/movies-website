
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import { movieData } from '../data/movies';

const Index = () => {
  const [movies, setMovies] = useState(movieData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = movies;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.cast?.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Downloads') {
        // Show all movies when Downloads is selected
        filtered = searchTerm ? filtered : movies;
      } else {
        filtered = filtered.filter(movie =>
          movie.category === selectedCategory
        );
      }
    }

    setFilteredMovies(filtered);
  }, [searchTerm, selectedCategory, movies]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'Downloads') {
      // Navigate to downloads section or show download-focused view
      console.log('Downloads section selected');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
      <Hero />
      <MovieGrid movies={filteredMovies} />
      <Footer />
    </div>
  );
};

export default Index;
