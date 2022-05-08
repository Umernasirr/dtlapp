import axios from 'axios';
import {IProfileItem} from '../state/profileReducer/profileSlice';
import {BASE_URL} from '../utils/theme/constants';

export interface IClients {
  _id: string;
  name: string;
}

const useProfiles = (userId: string) => {
  const getProfiles = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/profile/by-id/${userId}`);

      if (!res?.data?.data) {
        return;
      }

      const profiles: IProfileItem[] = res.data.data.profiles;
      return profiles;
    } catch (e) {
      console.log('getProfiles', e);
    }
  };

  const createProfile = async (clientId: string) => {
    try {
      const res = await axios.post(`${BASE_URL}/profile/create`, {
        userId,
        clientId,
      });

      if (!res?.data?.data) {
        return;
      }

      const profiles: IProfileItem[] = res.data.data.profiles;
      return profiles;
    } catch (e) {
      console.log('createProfile', e);
    }
  };

  return {
    getProfiles,
    createProfile,
  };
};

export default useProfiles;
