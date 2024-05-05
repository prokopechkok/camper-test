import ACIcon from '../../assets/icons/ACIcon';
import AdultsIcon from '../../assets/icons/AdultsIcon';
import AirCondIcon from '../../assets/icons/AirCondIcon';
import AutomaticIcon from '../../assets/icons/AutomaticIcon';
import BedIcon from '../../assets/icons/BedIcon';
import CDIcon from '../../assets/icons/CDIcon';
import HobIcon from '../../assets/icons/HobIcon';
import KitchenIcon from '../../assets/icons/KitchenIcon';
import PetrolIcon from '../../assets/icons/PetrolIcon';
import RadioIcon from '../../assets/icons/RadioIcon';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Booking from '../Booking/Booking';
import OptionCard from '../OptionCard/OptionCard';
import s from './Features.module.css';
const Features = ({ advert }) => {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    details,
    engine,
    transmission,
    adults,
  } = advert;

  return (
    <div className={s.container}>
      <div className={s.info}>
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
          {details.airConditioner > 0 && (
            <li>
              <OptionCard
                icon={<AirCondIcon />}
                text=" air conditioner"
                data={details.airConditioner}
              />
            </li>
          )}
          {details.CD > 0 && (
            <li>
              <OptionCard icon={<CDIcon />} text="CD" data={''} />
            </li>
          )}
          {details.radio > 0 && (
            <li>
              <OptionCard icon={<RadioIcon />} text="Radio" data={''} />
            </li>
          )}
          {details.hob > 0 && (
            <li>
              <OptionCard icon={<HobIcon />} text=" hob" data={details.hob} />
            </li>
          )}
        </ul>
        <div className={s.details}>
          <h3 className={s.title}>Vehicle details</h3>
          <ul className={s.detailsList}>
            <li>
              <p>Form</p>
              <p>{capitalizeFirstLetter(form)}</p>
            </li>
            <li>
              <p>Length</p>
              <p>{length}</p>
            </li>
            <li>
              <p>Width</p>
              <p>{width}</p>
            </li>
            <li>
              <p>Hight</p>
              <p>{height}</p>
            </li>
            <li>
              <p>Tank</p>
              <p>{tank}</p>
            </li>
            <li>
              <p>Consumption</p>
              <p>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <Booking />
    </div>
  );
};

export default Features;
