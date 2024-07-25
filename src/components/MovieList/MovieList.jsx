import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({movies}) => {
  
  const location=useLocation();
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieName}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          className={css.movie}>{movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );


}



export default MovieList