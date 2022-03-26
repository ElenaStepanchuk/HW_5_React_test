import { Link, useParams } from 'react-router-dom';
import { DetailsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const Details = async () => {
      try {
        const response = await DetailsFilm(movieId);
        console.log(response.data);
        setDetails(response);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(details);
      }
    };
    Details();
  }, [movieId]);

  return (
    <div>
      <h2>{movieId}</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};
export default MovieDetailsPage;
