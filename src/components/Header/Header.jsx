import { Link } from 'react-router-dom';
import s from './Header.module.css';
import VanIcon from '../../assets/icons/VanIcon';

export const Header = () => {
  return (
    <div className={s.container}>
      <Link to="/" className={s.logo}>
        <VanIcon /> CamperUA
      </Link>
      <nav className={s.navigation}>
        <Link to="/" className={s.link}>
          Про нас
        </Link>
        <Link to="/catalog" className={s.link}>
          Кампери в оренду
        </Link>
        <Link to="/favorites" className={s.link}>
          Улюблені оголошення
        </Link>
      </nav>
    </div>
  );
};
