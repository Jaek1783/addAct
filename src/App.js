import './App.css';
import React, {useState} from 'react';
import Movie from './Movies.js';
import MovieForm from './MovieForm.js';
import Header from './Header';
import Users from './Users';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
    <Router>
      <div className="App">
      <Header title="Coding "></Header>
        <Routes>
          <Route path="/"></Route>
          <Route path="/movie" element={
            <div className="container">
            {renderMovies}
            <MovieForm addMovie={addMovie}/>
            </div>
          }>          
          </Route>
          <Route path="/users" element={ <Users></Users>}></Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
