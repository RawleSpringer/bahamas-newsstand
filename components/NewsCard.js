import styles from '../styles/NewsCard.module.css';
import GuardianImg from './GuardianLogo';
import EWImg from './EWLogo';
import TribuneImg from './TribuneLogo';

const NewsCard = ({ article, newspaper }) => {
  return (
    <article className={styles.container}>
      <div>
        {newspaper === 'guardian' && <GuardianImg />}
        {newspaper === 'ew' && <EWImg />}
        {newspaper === 'tribune' && <TribuneImg />}
      </div>
      {newspaper === 'guardian' && (
        <a
          href={`https://thenassauguardian.com/${article.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {article.title}
        </a>
      )}
      {newspaper === 'ew' && (
        <a href={article.link} target="_blank" rel="noreferrer">
          {article.title}
        </a>
      )}
      {newspaper === 'tribune' && (
        <a
          href={`http://www.tribune242.com/${article.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {article.title}
        </a>
      )}
    </article>
  );
};

export default NewsCard;
