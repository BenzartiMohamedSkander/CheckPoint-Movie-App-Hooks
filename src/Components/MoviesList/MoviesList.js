import React from 'react'
import MovcieCard from '../MovieCard/MovieCard'
import './MoviesList.css'

function MoviesList({movies}) {
    return (
        <div className="moviesList">
            {
                movies.map((movie,i) =>(
                <MovcieCard movie={movie}  key={i}/>) )
            }
        </div>
    )
}

export default MoviesList
