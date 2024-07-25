import React, { useState } from 'react';
import css from './SearchForm.module.css';


const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    if (query==='') return;
    onSubmit(query);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input value={query} onChange={handleChange} className={css.input} placeholder="Search for movie keyword" />
      <button type="submit" className={css.button}>Search</button>
    </form>
  )
}

export default SearchForm