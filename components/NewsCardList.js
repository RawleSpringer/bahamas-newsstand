import styles from '../styles/NewsCardList.module.css';
import NewsCard from './NewsCard';

const NewsCardList = () => {
  return (
    <ul className={styles.newscard__list}>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
      <li>
        <NewsCard />
      </li>
    </ul>
  );
};

export default NewsCardList;
