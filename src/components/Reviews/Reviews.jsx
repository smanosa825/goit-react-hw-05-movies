import React, { useEffect, useState } from 'react'
import { getReviews } from 'api/fetchAPI';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css'

const Reviews = () => {
  const [reviewsList,setReviewsList]=useState([]);
  const {movieID} = useParams();
  
  useEffect(()=> {
    const reviews = async() =>{
    try {
      const response = await getReviews(movieID);
      setReviewsList(response);
    } catch (error) {
      console.error(error)
    }
    }
    reviews();
  }, [movieID])
  
  return (
    <>
    {reviewsList.length !== 0?
    <div> 
      <h3 className={css.subtitle}>Reviews</h3>
      <ul>
        {reviewsList.map(review => (
          <li key={review.id}>
            <h4 className={css.author}>{review.author}</h4>
            <p className={css.review}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div> :
    <div>There are no reviews for this movie.</div>
    }
    </>
  )
}

export default Reviews