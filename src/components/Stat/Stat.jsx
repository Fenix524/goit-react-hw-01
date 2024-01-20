import css from './Stat.module.css';

const Stat = ({statTitle, statNumber}) => {
  return (
    <li className={css.element}>
      <span className={css.label}>{statTitle}</span>
      <span className={css.value}>{statNumber}</span>
    </li>
  );
};

export default Stat;
