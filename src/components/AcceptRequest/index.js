import {Component} from 'react'

import {AcceptRequestMainContainer,AcceptRequestUnorderedListContainer} from "./styledComponents"

import AcceptRequestSideBar from '../AcceptRequestSideBar'
import AcceptRequestMainHeading from "../AcceptRequestMainHeading"
import EachPostCard from '../EachPostCard'


class AcceptRequest extends Component{
    state = {acceptRequestCardDetails: []}

    componentDidMount(){
        this.getMakeApi()
    }

    getMakeApi = async () => {
        const url = 'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
        const options = {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(url,options)
        const {ok} = response
        if (ok){
            const fetchedData = await response.json()
            const updateFetchedDetails = fetchedData.map(eachOne => ({
                postId: eachOne.post_id ,
                title: eachOne.title,
                commentsCount: eachOne.comments_count ,
                postContent: eachOne.post_content ,
                postedAt: eachOne.posted_at ,
                postedBy: {
                    profilePic: eachOne.posted_by.profile_pic ,
                    userId: eachOne.posted_by.user_id, 
                    username: eachOne.posted_by.username ,
                    
                },
                reactions: { reactionsCount: eachOne.reactions.reactions_count}, 
                tags: eachOne.tags.map(eachTag => ({
                    tagId: eachTag.tag_id,
                    tagName: eachTag.tag_name 
                }))
            }))
            this.setState({acceptRequestCardDetails: updateFetchedDetails})
        }else{
            let a = 10
        }
    }

    render(){
        const {acceptRequestCardDetails} = this.state 
        return(
             <AcceptRequestMainContainer>                   {/*div Container*/}
                <AcceptRequestSideBar/>                     {/*Side Bar*/}
                <div>                    
                   <AcceptRequestMainHeading/>              {/*Page Main Heading */}
                   <AcceptRequestUnorderedListContainer>
                       {acceptRequestCardDetails.map(eachItem => {
                           const {postId} = eachItem 
                           return <EachPostCard key={postId} postDetails={eachItem}/>
                       })}
                   </AcceptRequestUnorderedListContainer>
                   <h1>HELLO</h1>
                </div>  
            </AcceptRequestMainContainer>
        )
    }
}
export default AcceptRequest