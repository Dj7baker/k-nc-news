import { useParams } from "react-router-dom";
import ArticlesList from "./Articles/ArticlesList";

const SingleTopic = () => {
  const { topic_slug } = useParams();

  return (<ArticlesList topic={topic_slug}/>)
};
  export default SingleTopic