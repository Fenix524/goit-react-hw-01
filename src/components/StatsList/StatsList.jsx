import Stat from '../Stat/Stat';
import css from './StatsList.module.css';

const StatsList = ({ stats: { followers, views, likes } }) => (
  <ul className={css.stats}>
    {[
      <Stat key={1} statTitle={'Followers'} statNumber={followers} />,
      <Stat key={2} statTitle={'Views'} statNumber={views} />,
      <Stat key={3} statTitle={'Likes'} statNumber={likes} />,
    ]}
  </ul>
);
export default StatsList;
