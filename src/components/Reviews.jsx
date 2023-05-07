import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <>
          {reviews.map(review => (
            <div key={review.id}>
              <p className="subtitle">Author: {review.author}</p>
              <p className="text">{review.content}</p>
            </div>
          ))}
        </>
      )}
      {reviews.length <= 0 && isLoading === false && (
        <div>No reviews found</div>
      )}
    </>
  );
};

export default Reviews;
