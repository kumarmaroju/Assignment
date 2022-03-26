import { ProfileNameStyles } from "./styledComponents"

const ProfileName = props => {
    const {username} = props 
    return <ProfileNameStyles>{username}</ProfileNameStyles>
}

export default ProfileName