import styles from '../styles/NewsContainer.module.css';

const NewsContainer = ({ children }) => {
  return <section className={styles.newscontainer}>{children}</section>;
};

export default NewsContainer;
