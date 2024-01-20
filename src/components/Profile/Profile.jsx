import Description from '../Description/Description';
import StatsList from '../StatsList/StatsList';
import css from './Profile.module.css';

const Profile = ({ profileData }) => (
  <div className={css.profile}>
    <Description obj={profileData} />
    <StatsList stats={profileData.stats} />
  </div>
);

export default Profile;
