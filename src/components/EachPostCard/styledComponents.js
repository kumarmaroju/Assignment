import styled from 'styled-components'

export const PostCardListItem = styled.li`
 width:240px;
 margin-right:10px;
 border:1px solid skyblue;
 padding:10px;
 margin:10px;
`

export const MessageContainer = styled.div`
display:flex;
justify-content:${props => props.messageCategory ? 'space-between': ''};
align-items:center;
`