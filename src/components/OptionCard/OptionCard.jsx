import s from './OptionCard.module.css';
const OptionCard = ({ icon, text, data }) => {
  return (
    <div className={s.card}>
      <div>{icon}</div>
      <p>{`${data}${text}`}</p>
    </div>
  );
};

export default OptionCard;
