import PostCardTitle from "../PostCardTitle"
import PostCardParagraph from '../PostCardParagraph'
import UiDiscussParagraph from "../UiDiscussParagraph"
import TeamUiParagraph from '../TeamUiParagraph'
import MessageImage from "../MessageImage" 
import MessageCount from "../MessageCount"

import {PostCardListItem,MessageContainer} from './styledComponents'


const EachPostCard = props => {
    const {postDetails} = props 
    const {title,postContent,reactions} = postDetails
    const {reactionsCount} = reactions
    return (
        <PostCardListItem>
            <PostCardTitle title={title}/>  {/*Card Title Component */}    
            <PostCardParagraph postContent={postContent}/>
            <MessageContainer messageCategory>
                <MessageContainer>
                    <UiDiscussParagraph/>
                    <TeamUiParagraph/>
                </MessageContainer>
                
                <MessageContainer>
                    <MessageImage/>
                    <MessageCount count={reactionsCount} />
                </MessageContainer>
            </MessageContainer>
        </PostCardListItem>
    ) 
} 
export default EachPostCard