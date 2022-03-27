import {Component} from 'react'

import SectionOne from '../SectionOne'
import SectionTwo from '../SectionTwo'
import ChangeSectionsButton from '../ChangeSectionButton'
import { AcceptRequestMainContainer } from './styledComponents'

class AcceptRequest extends Component{
    state = {acceptRequestCardDetails: [], changeSections: true}

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

    onChangeSectionView = changeSection => {
        this.setState({changeSections: changeSection})
   
    }

    render(){
        const {acceptRequestCardDetails, changeSections} = this.state 
        const changeSectionsBtnContent = changeSections ? "Next  >" : "<  Back"
        return(
            <AcceptRequestMainContainer>
                <ChangeSectionsButton onChangeSectionView={this.onChangeSectionView} changeSections= {changeSections}>{changeSectionsBtnContent}</ChangeSectionsButton>
                {changeSections ? 
                <SectionOne acceptRequestCardDetails= {acceptRequestCardDetails} /> : 
                <SectionTwo />}
            </AcceptRequestMainContainer>
        )
    }
}
export default AcceptRequest