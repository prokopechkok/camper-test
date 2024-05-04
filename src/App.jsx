import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { HomePage, CatalogPage, FavoritesPage } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from './redux/adverts/advertsOperations';
import { selectIsLoading } from './redux/adverts/advertsSelectors';
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}
export default App;
