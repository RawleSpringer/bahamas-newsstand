import styles from '../styles/NewsCard.module.css';
import GuardianImg from './GuardianLogo';

const NewsCard = () => {
  return (
    <article className={styles.container}>
      <div>
        <GuardianImg />
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque commodi
        explicabo, illum doloribus quasi ea voluptatibus assumenda? Vel non quos
        sint iure similique ex cumque vero saepe. Vitae, at. Minima!
      </p>
    </article>
  );
};

export default NewsCard;
