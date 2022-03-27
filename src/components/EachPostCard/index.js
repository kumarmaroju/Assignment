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
    const {postDetails} = props 
    console.log(postDetails)
    const {title,postContent,commentsCount,postedBy} = postDetails
    const {profilePic,username} = postedBy
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
                    <ProfilePicture profilePic={profilePic}/>
                    <ProfileName username={username} />
                </MessageContainer>
                <ApproveButton/>
            </MessageContainer>
        </PostCardListItem>
    ) 
} 
export default EachPostCard