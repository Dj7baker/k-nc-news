import * as S from './styledTopicsCard'

const TopicCard = ({topic}) => {

    return(
        <S.TopicsWrapper >
            <h2>{topic.slug}</h2>
            <h3>"{topic.description}"</h3>
        </S.TopicsWrapper>
    )
}

export default TopicCard