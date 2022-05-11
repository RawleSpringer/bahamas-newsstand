const axios = require('axios').default;
const cheerio = require('cheerio');

export async function getAllNationalNews() {
  const guardianNewsArticles = [];
  const ewNewsArticles = [];
  const tribuneNewsArticles = [];

  const guardianAxiosResponse = await axios.get(
    'https://thenassauguardian.com/category/news'
  );

  const $guardian = cheerio.load(guardianAxiosResponse.data);
  $guardian('.post-title a').each((i, article) => {
    if (i < 4) {
      guardianNewsArticles.push({
        title: $guardian(article).text(),
        link: $guardian(article).attr('href'),
      });
    }
  });

  const ewAxiosResponse = await axios.get('https://ewnews.com/');

  const $ew = cheerio.load(ewAxiosResponse.data);
  $ew('.entry-title a').each((i, article) => {
    if (i < 4) {
      ewNewsArticles.push({
        title: $ew(article).text(),
        link: $ew(article).attr('href'),
      });
    }
  });

  const tribuneAxiosResponse = await axios.get('http://www.tribune242.com');

  const $tribune = cheerio.load(tribuneAxiosResponse.data);
  $tribune('.item h4').each((i, article) => {
    if (i < 4) {
      tribuneNewsArticles.push({
        title: $tribune(article).text(),
        link: $tribune(article).children('a').attr('href'),
      });
    }
  });

  return {
    guardian: guardianNewsArticles,
    ew: ewNewsArticles,
    tribune: tribuneNewsArticles,
  };
}

export async function getAllBusinessNews() {
  const guardianNewsArticles = [];
  const ewNewsArticles = [];
  const tribuneNewsArticles = [];

  const guardianAxiosResponse = await axios.get(
    'https://thenassauguardian.com/category/business/'
  );

  const $guardian = cheerio.load(guardianAxiosResponse.data);
  $guardian('.post-title a').each((i, article) => {
    if (i < 4) {
      guardianNewsArticles.push({
        title: $guardian(article).text(),
        link: $guardian(article).attr('href'),
      });
    }
  });

  const ewAxiosResponse = await axios.get(
    'https://ewnews.com/category/business'
  );

  const $ew = cheerio.load(ewAxiosResponse.data);
  $ew('.entry-title a').each((i, article) => {
    if (i < 4) {
      ewNewsArticles.push({
        title: $ew(article).text(),
        link: $ew(article).attr('href'),
      });
    }
  });

  const tribuneAxiosResponse = await axios.get(
    'http://www.tribune242.com/news/local-business/'
  );

  const $tribune = cheerio.load(tribuneAxiosResponse.data);
  $tribune('.item h4').each((i, article) => {
    if (i < 4) {
      tribuneNewsArticles.push({
        title: $tribune(article).text(),
        link: $tribune(article).children('a').attr('href'),
      });
    }
  });

  return {
    guardian: guardianNewsArticles,
    ew: ewNewsArticles,
    tribune: tribuneNewsArticles,
  };
}
