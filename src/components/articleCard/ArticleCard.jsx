import * as S from './styled'

const ArticleCard = ({article}) => {
    return(
        <S.CardWrapper >
            <h3>{article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Date: {article.created_at}</p>
            <p>Comments: {article.comment_count}</p>
        </S.CardWrapper>
    )
}

export default ArticleCard