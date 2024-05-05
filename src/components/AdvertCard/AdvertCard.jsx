import { useEffect, useState } from 'react';
import AdvertModal from '../AdvertModal/AdvertModal';
import s from './AdvertCard.module.css';
import { trimDescription } from '../../utils/helpers';
import HeartIcon from '../../assets/icons/HeartIcon';
import StarIcon from '../../assets/icons/StarIcon';
import PinIcon from '../../assets/icons/PinIcon';
import OptionCard from '../OptionCard/OptionCard';
import AdultsIcon from '../../assets/icons/AdultsIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import ACIcon from '../../assets/icons/ACIcon';
import BedIcon from '../../assets/icons/BedIcon';
import PetrolIcon from '../../assets/icons/PetrolIcon';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
const AdvertCard = ({ advert }) => {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    details,
    engine,
    transmission,
    adults,
  } = advert;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isAdvertFavorite = favorites.some(
      (favAdvert) => favAdvert._id === advert._id
    );
    return isAdvertFavorite;
  });
  const [id] = useState(advert._id);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAdvertAlreadyFavorite = favorites.some(
      (favAdvert) => favAdvert._id === id
    );

    if (!isAdvertAlreadyFavorite) {
      const updatedFavorites = isFavorite
        ? [...favorites, advert]
        : favorites.filter((favAdvert) => favAdvert._id !== id);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  }, [advert, id, isFavorite]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={s.card}>
      <div
        className={s.image}
        style={{ backgroundImage: `url(${gallery[0]})` }}
      ></div>
      <div className={s.infoBox}>
        <div>
          <div className={s.header}>
            <h3>{name.slice(0, 23)}</h3>
            <div className={s.priceWrapper}>
              <p>€{price.toFixed(2)}</p>
              <button
                type="button"
                className={isFavorite ? s.favoriteBtn : s.notFavoriteBtn}
                onClick={toggleFavorite}
              >
                {isFavorite ? <FavoriteIcon /> : <HeartIcon />}
              </button>
            </div>
          </div>
          <div className={s.ratingWrap}>
            <div className={s.rating}>
              <StarIcon />
              <button
                type="button"
                className={s.ratingBtn}
                onClick={toggleModal}
              >
                {rating}({reviews.length} Reviews)
              </button>
            </div>
            <div className={s.locationWrap}>
              <PinIcon />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={s.description}>{trimDescription(description, 64)}</p>
        <ul className={s.options}>
          <li>
            <OptionCard icon={<AdultsIcon />} text=" adults" data={adults} />
          </li>
          {transmission === 'automatic' && (
            <li>
              <OptionCard icon={<AutomaticIcon />} text="Automatic" data={''} />
            </li>
          )}
          {engine === 'petrol' && (
            <li>
              <OptionCard icon={<PetrolIcon />} text="Petrol" data={''} />
            </li>
          )}
          {details.kitchen > 0 && (
            <li>
              <OptionCard icon={<KitchenIcon />} text="Kitchen" data={''} />
            </li>
          )}
          <li>
            <OptionCard icon={<BedIcon />} text=" beds" data={details.beds} />
          </li>
          {details.airConditioner > 0 && (
            <li>
              <OptionCard icon={<ACIcon />} text="AC" data={''} />
            </li>
          )}
        </ul>
        <button type="button" onClick={toggleModal} className={s.showMoreBtn}>
          Show more
        </button>
        <AdvertModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          advert={advert}
        />
      </div>
    </div>
  );
};

export default AdvertCard;
