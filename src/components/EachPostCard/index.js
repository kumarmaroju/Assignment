import PostCardTitle from "../PostCardTitle"
import PostCardParagraph from '../PostCardParagraph'
import UiDiscussParagraph from "../UiDiscussParagraph"
import TeamUiParagraph from '../TeamUiParagraph'
import MessageImage from "../MessageImage" 
import MessageCount from "../MessageCount"
import ProfilePicture from "../ProfilePicture"
import ProfileName from "../ProfileName"
import ApproveButton from "../ApproveButton"

import {PostCardListItem,MessageContainer} from './styledComponents'


const EachPostCard = props => {
    const {postDetails,onClickApprove} = props 
    const {title,postContent,commentsCount,postedBy,isReacted,postId} = postDetails
    const {profilePic,username} = postedBy

    const isApprove = () => onClickApprove(postId)

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
                    <MessageCount count={commentsCount} />
                </MessageContainer>
            </MessageContainer>
            <MessageContainer messageCategory>
                <MessageContainer>
                    <ProfilePicture profilePic={profilePic} username={username}/>
                    <ProfileName username={username} />
                </MessageContainer>
                <ApproveButton isReacted={isReacted} isApprove={isApprove}/>
            </MessageContainer>
        </PostCardListItem>
    ) 
} 
export default EachPostCard