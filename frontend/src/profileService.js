import {Axios} from 'axios';

const axios = new Axios({baseURL:'http://localhost:8000/api'})

export const getProfileData = async (id = "1") => {
  try {
    const response = await axios.get(`/profile` + id);
    return JSON.parse(response.data);
  } catch (error) {
    throw new Error('Failed to fetch profile data');
  }
};

