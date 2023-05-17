import articles from "../article-content";
import ArticleList from '../components/ArticleList'
const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>
    </>

  )
}
export default ArticleListPage;