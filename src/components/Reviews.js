import { useParams } from 'react-router-dom';
import { ReviewsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const ReviewsInfo = async () => {
      setLoading(true);
      try {
        const response = await ReviewsFilm(movieId);
        console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    ReviewsInfo();
  }, [movieId]);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {/* {reviews && <h2>{reviews.content}</h2>} */}
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>
                {review.author}
                <span>{review.author_details.rating || 0}</span>
              </h2>
              <p>{review.created_at}</p>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Reviews;
