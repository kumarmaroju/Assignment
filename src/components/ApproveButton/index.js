import {ApproveButtonStyles} from "./styledComponents.js"

const ApproveButton = props => {
    const {isReacted,isApprove} = props 
    const reactedText = isReacted ? "Approve" : "Approved"
    return <ApproveButtonStyles onClick={isApprove}>{reactedText}</ApproveButtonStyles>
}

export default ApproveButton