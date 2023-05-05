import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchReviews(movieId);
            setReviews(response.results);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [movieId]);

    return     <>
    {reviews.length > 0 && (
      <>
        {reviews.map(review => (
          <div key={review.id}>
           <p className='subtitle'>Author: {review.author}</p>
           <p className='text'>{review.content}</p>
          </div>
        ))}
      </>
    )}
  </>
}
