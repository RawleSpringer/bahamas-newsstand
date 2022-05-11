import styles from '../styles/NewsCard.module.css';
import GuardianImg from './GuardianLogo';

const NewsCard = ({ article }) => {
  return (
    <article className={styles.container}>
      <div>
        <GuardianImg />
      </div>

      <p>{article.title}</p>
    </article>
  );
};

export default NewsCard;
