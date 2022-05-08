import axios from 'axios';
import {IProfileItem} from '../state/profileReducer/profileSlice';
import {BASE_URL} from '../utils/theme/constants';
import Toast from 'react-native-toast-message';
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
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e?.response?.data?.message ?? 'Error Occured',
      });
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
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e?.response?.data?.message ?? 'Error Occured',
        text2: 'Please try again',
      });
    }
  };

  return {
    getProfiles,
    createProfile,
  };
};

export default useProfiles;
