import React, { useState } from 'react';
import './Movies.css';

const Movies = () => {
  const movies = [
    {
      title: 'Interception',
      genre: 'Science Fiction',
      releaseYear: 2010
    },
    {
      title: 'The Shawnshank Redemption',
      genre: 'Drama',
      releaseYear: 1994
    },
    {
      title: 'The Dark Night',
      genre: 'Action',
      releaseYear: 2008
    }
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const handleGenreSelect = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleMovieFilter = (movies, genre) => {
    if (genre === 'All Genres') {
      return movies;
    }
    return movies.filter(movie => movie.genre === genre);
  };

  const filteredMovies = handleMovieFilter(movies, selectedGenre);
  const handleMovieClick = (title) => {
    alert(`Clicked on ${title}`);
  };
  return (
    <div>
      <h1>Movie List</h1>
      <select value={selectedGenre} onChange={handleGenreSelect}>
        <option value="All Genres">All Genres</option>
        {Array.from(new Set(movies.map(movie => movie.genre))).map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <br />
      {filteredMovies.map(movie => (
          <div
            key={movie.title}
            onClick={() => handleMovieClick(movie.title)}
            className="movie-details"
          >
            <strong>{movie.title}</strong>
            <br />
            <span>
              {movie.genre}<br />
              Released: {movie.releaseYear}
            </span>
          </div>
        ))
      }
    </div>
  );
};

export default Movies;
