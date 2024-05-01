import { Link } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.container}>
      <nav className={s.navigation}>
        <Link to="/catalog" className={s.link}>
          Catalogue
        </Link>
        <Link to="/favorites" className={s.link}>
          Favorites
        </Link>
      </nav>
    </div>
  );
};
