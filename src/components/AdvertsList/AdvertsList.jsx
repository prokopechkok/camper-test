import AdvertCard from '../AdvertCard/AdvertCard';

import s from './AdvertsList.module.css';

const AdvertsList = ({ filteredAds, pageSize }) => {
  const paginatedAds = filteredAds.slice(0, pageSize);
  return (
    <ul className={s.advertList}>
      {paginatedAds.map((advert) => (
        <AdvertCard key={advert._id} advert={advert} />
      ))}
    </ul>
  );
};

export default AdvertsList;
