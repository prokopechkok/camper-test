import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/HomePage.jsx'));
export const CatalogPage = lazy(() => import('./CatalogPage/CatalogPage.jsx'));
export const FavoritesPage = lazy(() =>
  import('./FavoritesPage/FavoritesPage.jsx')
);
