const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get('/', async (req, res) => {
  //  res.render('news');

  try {
    const newsAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    const newSportsAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    const newsTechAPI = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa'
    );
    //console.log(newsAPI.data);
    res.render('news', {
      articles: newsAPI.data.articles,
      total: newsAPI.data.totalResults,
      sportArticles: newSportsAPI.data.articles,
      techArticles: newsTechAPI.data.articles,
    });
  } catch (error) {
    if (error.response) {
      res.render('news', {
        articles: null,
      });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render('news', {
        articles: null,
      });
      console.log(error.request);
    } else {
      res.render('news', {
        articles: null,
      });
      console.log('Error', error.message);
    }
  }
});
//rgba(126, 126, 126, 0.349)
module.exports = newsRouter;
