import {PostParagraph} from "./styledComponents.js"

const PostCardParagraph = props => {
    const {postContent} = props 
    return (
        <PostParagraph>
            {postContent}
        </PostParagraph>
    )
}
export default PostCardParagraph