import axios from "axios";
const myApi = axios.create({
  baseURL: "https://dj-baker-news.herokuapp.com/api",
});

export const fetchArticles = (topic) => {
  return myApi.get(`/articles`, { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
export const fetchTopicBySlug = (topic_slug) => {
  return myApi.get(`/topics/${topic_slug}`).then((res) => {
    return res.data.topic;
  });
};
