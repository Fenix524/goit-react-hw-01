import css from './Description.module.css';

const Description = ({obj:{ avatar, username, tag, location }}) => (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>{"@" + tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );

export default Description;


