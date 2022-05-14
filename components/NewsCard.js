import styles from '../styles/NewsCard.module.css';
import NewsPaperLogo from './NewsPaperLogo';
import EWImg from './EWLogo';
import TribuneImg from './TribuneLogo';

const NewsCard = ({ article, newspaper }) => {
  return (
    <article className={styles.container}>
      <div>
        {article.image === 'noImage' ? (
          <NewsPaperLogo newspaper={newspaper} />
        ) : (
          <div height="150px" width="200px">
            <img src={article.image} width="100%" height="100%" />
          </div>
        )}
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
