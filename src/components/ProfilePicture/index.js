import { ProfilePictureStyles } from "./styledComponents"

const ProfilePicture = props => {
    const {profilePic} = props 
    return  <ProfilePictureStyles as='img' src={profilePic} alt="profile-pic"/>
}
export default ProfilePicture