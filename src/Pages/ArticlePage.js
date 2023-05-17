import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import articles from "../article-content";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ votes: 0, comments: [] });
  const { articleId } = useParams();
  const loadArticleInfo = async () => {
    const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`);
    const newArticleInfo = response.data;
    setArticleInfo(newArticleInfo);
  }
  useEffect(() => {
    loadArticleInfo();
    console.log();
  }, []);

  const Articles = articles.find(article => article.name === articleId);
  if (!Articles) return <NotFoundPage />
  return (
    <>
      <h1>{Articles.title}</h1>
      <p>This article has {articleInfo.votes} vote(s)</p>
      {Articles.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>

  )
}
export default ArticlePage;