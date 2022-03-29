import { Link, useParams, Outlet } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { DetailsFilm } from '../helpers/FetchFilms';
import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const Details = async () => {
      setLoading(true);
      try {
        const response = await DetailsFilm(movieId);
        // console.log(response.data);
        setDetail(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    Details();
  }, [movieId]);
  // console.log(detail.id);
  const handleBackBtn = () => {
    setDetail(null);
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {detail && <h2>{detail.original_title || detail.name}</h2>}
      <h3>Release date:</h3>
      {detail && <p>{detail.release_date}</p>}
      {detail && (
        <img
          src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
          alt={detail.original_title || detail.name}
        />
      )}
      <h3>Genres: </h3>
      {detail &&
        detail.genres.map(genre => {
          const id = nanoid();
          return <p key={id}>{genre.name}</p>;
        })}
      <h3>Descriptions: </h3>
      {detail && <p>{detail.overview}</p>}
      <h3>Homepage: </h3>
      {detail && <a href={`${detail.homepage}`}> {detail.homepage}</a>}
      <br />
      <Link to="/">
        <button type="button" onChange={handleBackBtn}>
          Go back
        </button>
      </Link>

      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
