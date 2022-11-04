import { useEffect } from "react";
import { fetchTopics } from "../../utils/api";
import { useState } from "react";
import * as S from "./styledTopics";
import TopicCard from "../TopicsCard/topicsCard";
import { Link } from "react-router-dom";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {fetchTopics().then((topicData) => {
      setTopics(topicData)
  })}, [])

return (
    <div>
      <h1>Topics</h1>
      <S.TopicsWrapper>
        {topics.map((topic) => (
          <Link to={`/Topics/${topic.slug}`} >
            <TopicCard key={topic.slug} topic={topic}/>
          </Link>
        ))}
      </S.TopicsWrapper>
    </div>
  );
}

export default TopicsList