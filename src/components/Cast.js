import { useParams } from 'react-router-dom';
import { CastFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CastInfo = async () => {
      setLoading(true);
      try {
        const response = await CastFilm(movieId);
        // console.log(response.data.cast);
        setCasts(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    CastInfo();
  }, [movieId]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <ul>
        {casts &&
          casts.map(cast => (
            <li key={cast.cast_id}>
              <h2>{cast.name}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                alt={cast.original_name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cast;
