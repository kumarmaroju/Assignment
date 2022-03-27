import { ProfilePictureStyles ,ProfilePictureNameStyles} from "./styledComponents"

const ProfilePicture = props => {
    const {profilePic,username} = props 
    const profilePicResult = profilePic !== ''
    const profilePicture = profilePic === '' ? username.slice(0,1) : profilePic

    return  (
       profilePicResult ? <ProfilePictureStyles as='img' src={profilePicture} alt="profile-pic"/> :
       <ProfilePictureNameStyles>{profilePicture}</ProfilePictureNameStyles>)
}
export default ProfilePicture