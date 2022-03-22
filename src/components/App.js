import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="movies" element={<MoviesPage />}>
          {/* <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
      </Route>
    </Routes>
  );
};
