import { useEffect } from "react";
import fetchArticles from "../../utils/api";
import { useState } from "react";
import ArticleCard from "../articleCard/ArticleCard";
import * as S from "./styledArticles";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
useEffect(() => {fetchArticles().then((articlesData) => {
    setArticles(articlesData)
})}, [])
console.log('articles: ', articles)

return (
    <div>
      <h1>Articles</h1>
      <S.ArticlesWrapper>
        {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
        ))}
      </S.ArticlesWrapper>
    </div>
  );
}

export default ArticlesList