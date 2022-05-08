import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/NewsContainer.module.css';
import NewsContainer from '../components/NewsContainer';
import NewsCardList from '../components/NewsCardList';

export default function Home() {
  return (
    <NewsContainer>
      <Head>
        <title>Bahamas Newsstand</title>
        <meta name="description" content="Bahamian News Aggregator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>The Nassau Guardian</h2>
        <NewsCardList />
      </section>
      <section>
        <h2>Eyewitness News</h2>
        <NewsCardList />
      </section>
      <section>
        <h2>The Tribune</h2>
        <NewsCardList />
      </section>
    </NewsContainer>
  );
}
