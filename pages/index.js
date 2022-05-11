import Head from 'next/head';
import Image from 'next/image';
import NewsContainer from '../components/NewsContainer';
import NewsCardList from '../components/NewsCardList';
import { getAllNationalNews } from '../lib/scraper';

export default function Home({ nationalNewsPosts }) {
  const guardianNationalNews = nationalNewsPosts['guardian'];
  const ewNationalNews = nationalNewsPosts['ew'];
  const tribuneNationalNews = nationalNewsPosts['tribune'];

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
          newsArticles={guardianNationalNews}
          newspaper="guardian"
        />
      </section>
      <section>
        <h2>Eyewitness News</h2>
        <NewsCardList newsArticles={ewNationalNews} newspaper="ew" />
      </section>
      <section>
        <h2>The Tribune</h2>
        <NewsCardList newsArticles={tribuneNationalNews} newspaper="tribune" />
      </section>
    </NewsContainer>
  );
}

export async function getStaticProps() {
  const nationalNewsPosts = await getAllNationalNews();

  return {
    props: { nationalNewsPosts },
  };
}
