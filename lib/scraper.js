const axios = require('axios').default;
const cheerio = require('cheerio');

/**
 * * NATIONAL NEWS
 */

export async function getAllNationalNews() {
  const guardianNewsArticles = [];
  const ewNewsArticles = [];
  const tribuneNewsArticles = [];

  /**
   * * GUARDIAN NATIONAL NEWS
   */
  const guardianAxiosResponse = await axios.get(
    'https://thenassauguardian.com/category/news'
  );

  const $guardian = cheerio.load(guardianAxiosResponse.data);

  $guardian('.post-item').each((i, article) => {
    if (i < 4) {
      guardianNewsArticles.push({
        title: $guardian(article)
          .children('.post-details')
          .children('.post-title')
          .text(),
        link: $guardian(article)
          .children('.post-details')
          .children('.post-title')
          .children('a')
          .attr('href'),
        image: $guardian(article).children('a').children('img').attr('src'),
      });
    }
  });

  /**
   * * EW NATIONAL NEWS
   */
  const ewAxiosResponse = await axios.get('https://ewnews.com/');

  const $ew = cheerio.load(ewAxiosResponse.data);
  // $ew('.entry-title a').each((i, article) => {
  //   if (i < 4) {
  //     ewNewsArticles.push({
  //       title: $ew(article).text(),
  //       link: $ew(article).attr('href'),
  //     });
  //   }
  // });

  $ew('.has-thumbnail').each((i, article) => {
    if (i < 4) {
      ewNewsArticles.push({
        title: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .text(),
        link: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .attr('href'),
        image: $ew(article)
          .children('.mobile-img-col')
          .children('.entry-thumbnail')
          .children('a')
          .children('img')
          .attr('src'),
      });
    }
  });

  /**
   * * TRIBUNE NATIONAL NEWS
   */
  const tribuneAxiosResponse = await axios.get('http://www.tribune242.com');

  const $tribune = cheerio.load(tribuneAxiosResponse.data);

  $tribune('.item').each((i, article) => {
    let image = $tribune(article).children('a').children('img').attr('src');

    if (i < 4) {
      tribuneNewsArticles.push({
        title: $tribune(article).children('h4').children('a').text(),
        link: $tribune(article).children('h4').children('a').attr('href'),
        image:
          image === undefined
            ? 'noImage'
            : $tribune(article).children('a').children('img').attr('src'),
      });
    }
  });

  console.log(tribuneNewsArticles);
  return {
    guardian: guardianNewsArticles,
    ew: ewNewsArticles,
    tribune: tribuneNewsArticles,
  };
}

/**
 * * BUSINESS NEWS
 */

export async function getAllBusinessNews() {
  const guardianNewsArticles = [];
  const ewNewsArticles = [];
  const tribuneNewsArticles = [];

  const guardianAxiosResponse = await axios.get(
    'https://thenassauguardian.com/category/business/'
  );

  // const $guardian = cheerio.load(guardianAxiosResponse.data);
  // $guardian('.post-title a').each((i, article) => {
  //   if (i < 4) {
  //     guardianNewsArticles.push({
  //       title: $guardian(article).text(),
  //       link: $guardian(article).attr('href'),
  //     });
  //   }
  // });
  /**
   * * GUARDIAN BUSINESS NEWS
   */
  const $guardian = cheerio.load(guardianAxiosResponse.data);

  $guardian('.post-item').each((i, article) => {
    if (i < 4) {
      guardianNewsArticles.push({
        title: $guardian(article).children('.post-title').text(),
        link: $guardian(article)
          .children('.post-title')
          .children('a')
          .attr('href'),
        image: $guardian(article).children('a').children('img').attr('src'),
      });
    }
  });

  /**
   * * EW BUSINESS NEWS
   */
  const ewAxiosResponse = await axios.get(
    'https://ewnews.com/category/business'
  );

  const $ew = cheerio.load(ewAxiosResponse.data);
  $ew('.entry-title a').each((i, article) => {
    if (i < 4) {
      ewNewsArticles.push({
        title: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .text(),
        link: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .attr('href'),
        image: $ew(article)
          .children('.mobile-img-col')
          .children('.entry-thumbnail')
          .children('a')
          .children('img')
          .attr('src'),
      });
    }
  });

  /**
   * * TRIBUNE BUSINESS NEWS
   */
  const tribuneAxiosResponse = await axios.get(
    'http://www.tribune242.com/news/local-business/'
  );

  const $tribune = cheerio.load(tribuneAxiosResponse.data);

  $tribune('.item').each((i, article) => {
    let image = $tribune(article).children('a').children('img').attr('src');

    if (i < 4) {
      tribuneNewsArticles.push({
        title: $tribune(article).children('h4').children('a').text(),
        link: $tribune(article).children('h4').children('a').attr('href'),
        image:
          image === undefined
            ? 'noImage'
            : $tribune(article).children('a').children('img').attr('src'),
      });
    }
  });

  return {
    guardian: guardianNewsArticles,
    ew: ewNewsArticles,
    tribune: tribuneNewsArticles,
  };
}

/**
 * * SPORTS NEWS
 */
export async function getAllSportsNews() {
  const guardianNewsArticles = [];
  const ewNewsArticles = [];
  const tribuneNewsArticles = [];

  /**
   * * GUARDIAN SPORTS NEWS
   */
  const guardianAxiosResponse = await axios.get(
    'https://thenassauguardian.com/category/sports/'
  );

  const $guardian = cheerio.load(guardianAxiosResponse.data);
  // $guardian('.post-title a').each((i, article) => {
  //   if (i < 4) {
  //     guardianNewsArticles.push({
  //       title: $guardian(article).text(),
  //       link: $guardian(article).attr('href'),
  //     });
  //   }
  // });

  $guardian('.post-item').each((i, article) => {
    if (i < 4) {
      guardianNewsArticles.push({
        title: $guardian(article)
          .children('.post-details')
          .children('.post-title')
          .text(),
        link: $guardian(article)
          .children('.post-details')
          .children('.post-title')
          .children('a')
          .attr('href'),
        image: $guardian(article).children('a').children('img').attr('src'),
      });
    }
  });

  /**
   * * EW SPORTS NEWS
   */
  const ewAxiosResponse = await axios.get('https://ewnews.com/category/sport');

  const $ew = cheerio.load(ewAxiosResponse.data);
  $ew('.entry-title a').each((i, article) => {
    if (i < 4) {
      ewNewsArticles.push({
        title: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .text(),
        link: $ew(article)
          .children('.post-inner')
          .children('.entry-header')
          .children('.entry-title')
          .children('a')
          .attr('href'),
        image: $ew(article)
          .children('.mobile-img-col')
          .children('.entry-thumbnail')
          .children('a')
          .children('img')
          .attr('src'),
      });
    }
  });

  /**
   * * TRIBUNE SPORTS NEWS
   */
  const tribuneAxiosResponse = await axios.get(
    'http://www.tribune242.com/news/local-sports/'
  );

  const $tribune = cheerio.load(tribuneAxiosResponse.data);

  $tribune('.item').each((i, article) => {
    let image = $tribune(article).children('a').children('img').attr('src');

    if (i < 4) {
      tribuneNewsArticles.push({
        title: $tribune(article).children('h4').children('a').text(),
        link: $tribune(article).children('h4').children('a').attr('href'),
        image:
          image === undefined
            ? 'noImage'
            : $tribune(article).children('a').children('img').attr('src'),
      });
    }
  });

  /*
   * * Image Check
   */

  // guardianNewsArticles.forEach((article) => {
  //   if (article.image === undefined) {
  //     article.image = 'image';
  //   }
  // });

  // ewNewsArticles.forEach((article) => {
  //   if (article.image === undefined) {
  //     article.image = 'image';
  //   }
  // });

  // tribuneNewsArticles.forEach((article) => {
  //   if (article.image === undefined) {
  //     article.image = 'image';
  //     console.log('are you running?');
  //   }
  // });

  return {
    guardian: guardianNewsArticles,
    ew: ewNewsArticles,
    tribune: tribuneNewsArticles,
  };
}
