import {AcceptRequestMainContainer,AcceptRequestUnorderedListContainer} from "./styledComponents"

import AcceptRequestSideBar from '../AcceptRequestSideBar'
import AcceptRequestMainHeading from "../AcceptRequestMainHeading"
import ChangeSectionsButton from "../ChangeSectionButton"
import EachPostCard from '../EachPostCard'

const SectionOne = props => {
    const {acceptRequestCardDetails,onChangeSectionView,changeSections} = props
    return (
        <AcceptRequestMainContainer>                   {/*div Container*/}
        <AcceptRequestSideBar/>                         {/*Side Bar*/}
        <div>    
          <div>                  
           <AcceptRequestMainHeading/>                  {/*Page Main Heading */}
           </div>
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