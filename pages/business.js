import Head from 'next/head';
import Image from 'next/image';
import NewsContainer from '../components/NewsContainer';
import NewsCardList from '../components/NewsCardList';
import { getAllBusinessNews } from '../lib/scraper';

export default function Business({ businessNewsPosts }) {
  const guardianBusinessNews = businessNewsPosts['guardian'];
  const ewBusinessNews = businessNewsPosts['ew'];
  const tribuneBusinessNews = businessNewsPosts['tribune'];

  return (
    <NewsContainer>
      <Head>
        <title>Bahamas Newsstand</title>
        <meta name="description" content="Bahamian News Aggregator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>The Nassau Guardian</h2>
        <NewsCardList
          newsArticles={guardianBusinessNews}
          newspaper="guardian"
        />
      </section>
      <section>
        <h2>Eyewitness News</h2>
        <NewsCardList newsArticles={ewBusinessNews} newspaper="ew" />
      </section>
      <section>
        <h2>The Tribune</h2>
        <NewsCardList newsArticles={tribuneBusinessNews} newspaper="tribune" />
      </section>
    </NewsContainer>
  );
}

export async function getStaticProps() {
  const businessNewsPosts = await getAllBusinessNews();

  return {
    props: { businessNewsPosts },
  };
}
