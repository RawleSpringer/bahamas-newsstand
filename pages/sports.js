import Head from 'next/head';
import Image from 'next/image';
import NewsContainer from '../components/NewsContainer';
import NewsCardList from '../components/NewsCardList';
import { getAllSportsNews } from '../lib/scraper';

export default function Home({ sportsNewsPosts }) {
  const guardianSportsNews = sportsNewsPosts['guardian'];
  const ewSportsNews = sportsNewsPosts['ew'];
  const tribuneSportsNews = sportsNewsPosts['tribune'];

  return (
    <NewsContainer>
      <Head>
        <title>Bahamas Newsstand</title>
        <meta name="description" content="Bahamian News Aggregator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>The Nassau Guardian</h2>
        <NewsCardList newsArticles={guardianSportsNews} newspaper="guardian" />
      </section>
      <section>
        <h2>Eyewitness News</h2>
        <NewsCardList newsArticles={ewSportsNews} newspaper="ew" />
      </section>
      <section>
        <h2>The Tribune</h2>
        <NewsCardList newsArticles={tribuneSportsNews} newspaper="tribune" />
      </section>
    </NewsContainer>
  );
}

export async function getStaticProps() {
  const sportsNewsPosts = await getAllSportsNews();

  return {
    props: { sportsNewsPosts },
  };
}
