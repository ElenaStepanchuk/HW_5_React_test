import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SerchFilms } from '../helpers/FetchFilms';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const ChangeQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      return toast('Введите имя фото!', {
        position: 'top-center',
      });
    }
    setQuery('');
    setPage(1);
    setFilms([]);
  };
  const scroll = () => {
    window.scrollBy({
      top: 2000,
      behavior: 'smooth',
    });
  };
  const handleChangePage = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    scroll();
  };

  // console.log(query);
  useEffect(() => {
    if (query === '') return;
    setLoading(true);
    const SerchFilm = async () => {
      await SerchFilms(page, query)
        .then(function (response) {
          if (response.data.resualts.length === 0) {
            return toast(
              'Фильм с таким именем не найден, введите новое имя фильмя!',
              {
                position: 'top-center',
              }
            );
          }
          console.log(response.data.results);
          setFilms(response.data.results);
          scroll();
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          console.log('response ok');
        });
    };
    SerchFilm();
    setLoading(false);
  }, [page, query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Serch
          <input
            onChange={ChangeQuery}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          ></input>
        </label>
        <button type="submit">Serch</button>
      </form>
      {films.length > 0 && (
        <button
          type="submit"
          page={page}
          onClick={() => handleChangePage(page)}
        >
          More films
        </button>
      )}
    </>
  );
};
export default MoviesPage;
