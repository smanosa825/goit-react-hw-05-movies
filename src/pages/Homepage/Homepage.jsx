import MovieList from 'components/MovieList/MovieList';
import { getTrending } from 'api/fetchAPI';
import React, { useState,useEffect } from 'react';
import css from './Homepage.module.css';

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      const movies= await getTrending();
      setTrendingMovies(movies);
    }
    fetchData();
  },[])


  return (
    <main className={css.mainPage}>
      <h1 className={css.title}>TRENDING MOVIES</h1>
      <MovieList movies={trendingMovies}/>
    </main>
  )
}

export default Homepage 