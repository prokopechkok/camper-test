import Booking from '../Booking/Booking';
import Rating from '../Rating/Rating';
import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {reviews.map((review, i) => (
          <li key={i}>
            <div className={s.avatarWrap}>
              <div className={s.avatar}>{review.reviewer_name.slice(0, 1)}</div>
              <div>
                <p className={s.name}>{review.reviewer_name}</p>
                <Rating rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <Booking />
    </div>
  );
};

export default Reviews;
