import s from './CatalogPage.module.css';
import { useEffect, useMemo, useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import ACIcon from '../../assets/icons/ACIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import TVIcon from '../../assets/icons/TVIcon';
import ShowerIcon from '../../assets/icons/ShowerIcon';
import VanIcon from '../../assets/icons/VanIcon';
import IntegratedIcon from '../../assets/icons/IntegratedIcon';
import AlcoveIcon from '../../assets/icons/AlcoveIcon';
import PinIcon from '../../assets/icons/PinIcon';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

const CatalogPage = () => {
  const initialPageSize = 4;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [loading, setLoading] = useState(false);

  const ads = useSelector(selectAdverts);
  const initialFilterValues = {
    location: '',
    equipment: [],
    type: '',
  };

  const [filters, setFilters] = useState(
    () => JSON.parse(localStorage.getItem('filters')) || initialFilterValues
  );
  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  const filteredAds = useMemo(() => {
    if (!filters) return ads.slice();

    let filteredList = ads.slice().filter((advert) => {
      const { location, equipment, type } = filters;
      const { details } = advert;

      const trueValues = [];
      for (const key in details) {
        if (details[key] !== 0 && details[key] !== '') {
          trueValues.push(key);
        }
      }
      if (advert.transmission === 'automatic') {
        trueValues.push('automatic');
      }

      if (
        location &&
        !advert.location
          .toLowerCase()
          .split(', ')
          .includes(location.toLowerCase().trim())
      ) {
        return false;
      }
      if (equipment && equipment.length > 0) {
        if (!equipment.every((target) => trueValues.includes(target))) {
          return false;
        }
      }
      if (type && advert.form !== type) {
        return false;
      }
      return true;
    });

    return filteredList;
  }, [filters, ads]);

  const initialValues = filters
    ? {
        location: filters.location,
        equipment: filters.equipment,
        type: filters.type,
      }
    : initialFilterValues;

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setFilters(values);
    },
  });
  const {
    values,
    handleSubmit,
    handleChange,
    // setFieldValue,
    // resetForm,
    setValues,
  } = formik;
  useEffect(() => {
    setValues(filters);
  }, [filters, setValues]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPageSize((prevPageSize) => prevPageSize + initialPageSize);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className={s.container}>
      <aside className={s.aside}>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={s.search}>
            <h2 className={s.smallTitle}>Location</h2>
            <div className={s.iconWrapper}>
              <input
                className={s.searchInput}
                type="text"
                name="location"
                id="location"
                onChange={(e) => handleChange(e)}
                value={values.location}
                placeholder="City"
              />
              <PinIcon className={s.pinIcon} />
            </div>
          </div>
          <h2 className={s.smallTitle}>Filters</h2>
          <div className={s.filters}>
            <fieldset className={s.field}>
              <legend className={s.legend}>Vehicle equipment</legend>
              <div className={s.checkboxGrid}>
                <div className={s.inputWrapper}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="equipment"
                    id="airConditioner"
                    value="airConditioner"
                    onChange={(e) => handleChange(e)}
                    checked={values.equipment.includes('airConditioner')}
                  />
                  <label className={s.label} htmlFor="airConditioner">
                    <ACIcon className={s.checkboxSvg} />
                    AC
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="equipment"
                    id="automatic"
                    onChange={(e) => handleChange(e)}
                    value="automatic"
                    checked={values.equipment.includes('automatic')}
                  />
                  <label className={s.label} htmlFor="automatic">
                    <AutomaticIcon className={s.checkboxSvg} />
                    Automatic
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="equipment"
                    id="kitchen"
                    onChange={(e) => handleChange(e)}
                    value="kitchen"
                    checked={values.equipment.includes('kitchen')}
                  />
                  <label className={s.label} htmlFor="kitchen">
                    <KitchenIcon className={s.checkboxSvg} />
                    Kitchen
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="equipment"
                    id="TV"
                    onChange={(e) => handleChange(e)}
                    value="TV"
                    checked={values.equipment.includes('TV')}
                  />
                  <label className={s.label} htmlFor="TV">
                    <TVIcon className={s.checkboxSvg} />
                    TV
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="equipment"
                    id="shower"
                    onChange={(e) => handleChange(e)}
                    value="shower"
                    checked={values.equipment.includes('shower')}
                  />
                  <label className={s.label} htmlFor="shower">
                    <ShowerIcon className={s.checkboxSvg} />
                    Shower/WC
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className={s.field}>
              <legend className={s.legend}>Vehicle type</legend>
              <div className={s.checkboxGrid}>
                <div className={s.inputWrapper}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="type"
                    id="panelTruck"
                    value="panelTruck"
                    onChange={(e) => handleChange(e)}
                    checked={values.type === 'panelTruck'}
                  />
                  <label htmlFor="panelTruck" className={s.label}>
                    <VanIcon className={s.radioSvg} />
                    Van
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="type"
                    id="fullyIntegrated"
                    value="fullyIntegrated"
                    onChange={(e) => handleChange(e)}
                    checked={values.type === 'fullyIntegrated'}
                  />
                  <label htmlFor="fullyIntegrated" className={s.label}>
                    <IntegratedIcon className={s.radioSvg} />
                    Fully Integrated
                  </label>
                </div>
                <div className={s.inputWrapper}>
                  <input
                    className={s.radio}
                    type="radio"
                    name="type"
                    id="alcove"
                    value="alcove"
                    onChange={(e) => handleChange(e)}
                    checked={values.type === 'alcove'}
                  />
                  <label htmlFor="alcove" className={s.label}>
                    <AlcoveIcon className={s.radioSvg} />
                    Alcove
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <button type="submit" className={s.searchBtn}>
            Search
          </button>
        </form>
      </aside>
      <section className={s.listSection}>
        <AdvertsList filteredAds={filteredAds} pageSize={pageSize} />
        <LoadMoreBtn handleLoadMore={handleLoadMore} loading={loading} />
      </section>
    </main>
  );
};

export default CatalogPage;
