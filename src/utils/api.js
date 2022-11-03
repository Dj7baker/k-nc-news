import axios from 'axios';
const myApi = axios.create({
    baseURL: 'https://dj-baker-news.herokuapp.com/api',
  });

  const fetchArticles = () => {
    return myApi.get(`/articles`).then((res) => {
        return res.data.articles;
      });
  }
  export default fetchArticles