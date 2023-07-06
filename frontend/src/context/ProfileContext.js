import { createContext, useContext, useEffect, useState } from "react";
import { getProfileData } from "../profileService";

const ProfileContext = createContext(null)

export const ProfileContextProvider = ({ children }) => {
  
  const [profileData, setProfileData] = useState(null);
  const [profileId, setProfileId] = useState(undefined)

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await getProfileData(profileId);
        setProfileData(data);
      } catch (error) {
      }
    };
    if(profileId)
      fetchProfileData();
  }, [profileId]);
  return <ProfileContext.Provider value={{ profileData,setProfileId }}>
    {children}
  </ProfileContext.Provider>
}
export const useProfile = (profileId) => {
  const context = useContext(ProfileContext)
  if (!context)
    throw new Error("Profile Context not provided")
  context.setProfileId(profileId)
  return context
}