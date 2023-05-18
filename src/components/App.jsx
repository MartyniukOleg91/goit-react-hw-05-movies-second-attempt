import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Review'));
const PageError = lazy(() => import('./PageError/PageError'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
};
