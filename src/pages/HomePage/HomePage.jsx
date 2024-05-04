import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <main className={s.container}>
      <section className={s.hero}>
        <h2>Подорожуйте вільно з нашими камперами в Україні</h2>
        <p>
          Любите подорожувати? Відчуйте вільну атмосферу мандрівок з нашою
          компанією, яка надає послуги оренди камперів в Україні! Відкрийте для
          себе найкращі місця України з комфортом та свободою, яку надають наші
          зручні та повністю укомплектовані кампери.
        </p>
        <button type="submit" className={s.searchBtn}>
          <Link to="/catalog">Дивитись кампери</Link>
        </button>
      </section>
      <section className={s.sections}>
        <div className={s.advantages}>
          <h3 className={s.title}>Переваги оренди камперів</h3>
          <div className={s.advantagesList}>
            <div className={s.row}>
              <div className={s.text}>Свобода руху</div>
              <div className={s.image1}></div>
            </div>
            <div className={s.row}>
              <div className={s.image2}></div>
              <div className={s.text}>Комфорт та зручність</div>
            </div>
            <div className={s.row}>
              <div className={s.text}>Можливість досліджувати нові місця</div>
              <div className={s.image3}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
