import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};
