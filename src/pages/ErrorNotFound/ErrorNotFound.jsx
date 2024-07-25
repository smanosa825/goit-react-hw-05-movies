import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from '../Homepage/Homepage.module.css';
import style from './ErrorNotFound.module.css'

const ErrorNotFound = () => {
  const location=useLocation();
  return (
    <main className={css.mainPage}>
        <Link to={location.state?.from || '/'}>
              <button className={style.back}>
Back
      </button>
      </Link>
      <h3 class={style.error}>page not found...</h3>
      </main>
  )
}

export default ErrorNotFound