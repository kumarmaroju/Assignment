import {PostTitle} from "./styledComponents"

const PostCardTitle = props => {
    const {title} = props 
    return (
        <PostTitle>
            {title}
        </PostTitle>
    )
}
export default PostCardTitle