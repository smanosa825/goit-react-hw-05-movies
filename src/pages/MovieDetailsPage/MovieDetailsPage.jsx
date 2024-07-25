import { getMovieDetails } from 'api/fetchAPI';
import React, { useEffect, useState, useRef, Suspense} from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import noimageplaceholder from 'components/images/image-not-found-icon.png';
import css from './MovieDetailsPage.module.css';
import defaultStyle from '../Homepage/Homepage.module.css';


const MovieDetailsPage = () => {

  const {movieID} = useParams();
  const [details, setDetails]=useState('');
  const location=useLocation()
  const backLink=useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async() => {
      const movie= await getMovieDetails(movieID);
      setDetails(movie);
    }
    movieDetails();
  }, [movieID])
  
  const averageScore=Math.round(details.vote_average * 10)
  const genres=details.genres?.map(genre => genre.name).join(', ')

  return (
    <main className={defaultStyle.mainPage}>
      <Link to={backLink.current} ><button className={css.back}>Back</button></Link>
      <div className={css.movieDetails}>
        <div className={css.details}>
          <img src={
          details.poster_path?
          `https://image.tmdb.org/t/p/w500${details.poster_path}`: `${noimageplaceholder}`} width='240' height='auto' alt={details.title}/>
        
          <div>
            <h1 className={css.title}>{details.title}</h1>

            <p className={css.paragraph}>User Score: <b>{averageScore}%</b></p>

            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.paragraph}>{details.overview}</p>

            <h3 className={css.subtitle}>Genres</h3>
            <p className={css.paragraph}>{genres}</p>
          </div>
        </div>
        <div className={css.line}>
        </div>
        <div className={css.otherInf}>
          <h3 className={css.othersub}>Other Information</h3>
          <ul>
            <Link to="casts" state={{ from: location }}><button className={css.otherBtn}>Casts</button></Link>
            <Link to="reviews" state={{ from: location }}><button className={css.otherBtn}>Reviews</button></Link>
          </ul>
        </div>
      </div>
        <Suspense fallback="Loading, please wait...">
      <Outlet/>
      </Suspense>
    </main>
  )
}

export default MovieDetailsPage