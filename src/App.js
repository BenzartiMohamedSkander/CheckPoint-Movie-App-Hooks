import './App.css';
import {moviesData} from './Components/MoviesData'

import React, { useState } from "react";


import Main from './Components/Main'
import Header from './Components/Header/Header'

function App() {
  const [movies, setMovies] = useState(moviesData);  

const [searchInput, setSearchInput] = useState("");
const [rateValue, setRateValue] = useState(0);

const addNewMovie=(newMovie)=>{setMovies([...movies,newMovie])}

  return (
    <div className="App">
      <Header setSearchInput={setSearchInput} setRateValue={setRateValue} rateValue={rateValue}/>
      {/* <Main movies={movies.filter((movie) =>(movie.rating >= 3))  }    addNewMovie={addNewMovie}
 /> */}
 <Main movies={movies.filter((movie) =>
   (movie.name.toLowerCase().includes(searchInput.toLowerCase().trim()) && (movie.rating >= rateValue)) ) }    addNewMovie={addNewMovie}
 />
    </div>
  );
}

export default App;
