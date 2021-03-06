import styles from '../styles/NewsCardList.module.css';
import NewsCard from './NewsCard';
import { v4 as uuidv4 } from 'uuid';

const NewsCardList = ({ newsArticles, newspaper }) => {
  return (
    <ul className={styles.newscard__list}>
      {newsArticles.map((article) => {
        return (
          <NewsCard key={uuidv4()} article={article} newspaper={newspaper} />
        );
      })}
    </ul>
  );
};

export default NewsCardList;
