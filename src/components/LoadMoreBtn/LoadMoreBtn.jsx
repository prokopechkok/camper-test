import Loader from '../Loader/Loader';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore, loading }) => {
  return (
    <button
      type="button"
      className={s.loadMoreBtn}
      onClick={handleLoadMore}
      disabled={loading}
    >
      {loading ? <Loader /> : 'Load more'}
    </button>
  );
};

export default LoadMoreBtn;
