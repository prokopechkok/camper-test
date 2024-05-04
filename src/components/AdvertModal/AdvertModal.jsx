import { useEffect } from 'react';
import CloseIcon from '../../assets/icons/CloseIcon';
import PinIcon from '../../assets/icons/PinIcon';
import StarIcon from '../../assets/icons/StarIcon';
import { trimDescription } from '../../utils/helpers';
import Tabs from '../Tabs/Tabs';
import s from './AdvertModal.module.css';

const AdvertModal = ({ onClose, isOpen, advert }) => {
  const { name, rating, reviews, location, price, gallery, description } =
    advert;
  const onWrapperClick = (e) => {
    if (e.target.classList.contains(s.filterModal)) {
      onClose();
    }
  };
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${s.filterModal} ${isOpen ? s.visible : ''}`}
      onClick={onWrapperClick}
    >
      <div className={s.modalContent}>
        <div className={s.header}>
          <div className={s.modalHeader}>
            <h3>{name}</h3>
            <button type="button" className={s.closeBtn} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={s.infoBox}>
            <div className={s.reviewLocation}>
              <div className={s.reviewWrap}>
                <StarIcon />
                <button type="button">
                  {rating}({reviews.length} Reviews)
                </button>
              </div>
              <div className={s.location}>
                <PinIcon />
                <p>{location}</p>
              </div>
            </div>
            <p className={s.price}>€{price.toFixed(2)}</p>
          </div>
        </div>
        <ul className={s.imageList}>
          {gallery.map((image, index) => (
            <li key={index}>
              <div
                className={s.image}
                style={{ backgroundImage: `url(${gallery[index]})` }}
              ></div>
            </li>
          ))}
        </ul>
        <p className={s.description}>{trimDescription(description, 340)}</p>
        <Tabs advert={advert} className={s.tabs} />
      </div>
    </div>
  );
};

export default AdvertModal;
