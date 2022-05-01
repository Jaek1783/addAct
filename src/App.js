import './App.css';
import React, {useState} from 'react';
import Movie from './Movies.js';
import MovieForm from './MovieForm.js';

function App() {
  const [movies, setMovies] = useState([]);
  const removeMovie = (id)=> {
    setMovies(movies.filter(movie =>{
      return movie.id !== id;
    }));
    const title = localStorage.key(id);
    localStorage.removeItem(id);
  };
  const renderMovies = movies.length ? movies.map(
    movie => {
      return (
        <Movie
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}
        ></Movie>
      )
    }
  ) : '영화를 추가해 주세요';
  const addMovie = (movie)=>{
    setMovies([
      ...movies,movie]);
  };
  return (
    <div className="App">
      <h1>Movies</h1>
        {renderMovies}
        <MovieForm addMovie={addMovie}/>
    </div>
  );
}

export default App;
