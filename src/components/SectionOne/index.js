import {AcceptRequestMainContainer,AcceptRequestUnorderedListContainer} from "./styledComponents"

import AcceptRequestSideBar from '../AcceptRequestSideBar'
import AcceptRequestMainHeading from "../AcceptRequestMainHeading"
import EachPostCard from '../EachPostCard'

const SectionOne = props => {
    const {acceptRequestCardDetails} = props
    return (
        <AcceptRequestMainContainer>                   {/*div Container*/}
        <AcceptRequestSideBar/>                         {/*Side Bar*/}
        <div>                    
           <AcceptRequestMainHeading/>                  {/*Page Main Heading */}
           <AcceptRequestUnorderedListContainer>
               {acceptRequestCardDetails.map(eachItem => {
                   const {postId} = eachItem 
                   return <EachPostCard key={postId} postDetails={eachItem}/>
               })}
           </AcceptRequestUnorderedListContainer>
        </div>
        </AcceptRequestMainContainer>
    )
}
export default SectionOne