import { MessageCountStyles } from "./styledComponents"

const MessageCount = props => {
    const {count} = props 
    return <MessageCountStyles>{count}</MessageCountStyles>
}
export default MessageCount