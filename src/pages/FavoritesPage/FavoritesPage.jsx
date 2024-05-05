import { useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const initialPageSize = 4;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [loading, setLoading] = useState(false);

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPageSize((prevPageSize) => prevPageSize + initialPageSize);
      setLoading(false);
    }, 1000);
  };
  return (
    <div className={s.container}>
      <AdvertsList filteredAds={favorites} pageSize={pageSize} className />
      <LoadMoreBtn handleLoadMore={handleLoadMore} loading={loading} />
    </div>
  );
};

export default FavoritesPage;
