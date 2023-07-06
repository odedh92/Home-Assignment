import "./profile.css";
import { useProfile } from "../../context/ProfileContext";
import ProfileCard from "../../components/profile-card/ProfileCard";
import {useParams} from 'react-router';
import ClipLoader from "react-spinners/ClipLoader";

const Profile = () => {

  const { id } = useParams()
  const { profileData } = useProfile(id);

  if(!profileData) {
    return <div class="loading">
      <ClipLoader/>
    </div>
  }
  return (
    <div className="profile-page">
      <ProfileCard profile={profileData} />
    </div>
  );
};

export default Profile;
