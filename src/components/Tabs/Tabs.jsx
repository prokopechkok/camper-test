import { useState } from 'react';
import s from './Tabs.module.css';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Tabs = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleFeatures = () => {
    setActiveTab('features');
  };
  const handleReviews = () => {
    setActiveTab('reviews');
  };
  return (
    <div className={s.tabs}>
      <ul className={s.nav}>
        <li
          className={activeTab === 'features' ? 'active' : ''}
          onClick={handleFeatures}
        >
          Features
        </li>
        <li
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={handleReviews}
        >
          Reviews
        </li>
      </ul>
      <div className={s.outlet}>
        {activeTab &&
          (activeTab === 'features' ? (
            <Features advert={advert} />
          ) : (
            <Reviews reviews={advert.reviews} />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
