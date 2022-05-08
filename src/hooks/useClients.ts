import axios from 'axios';
import {BASE_URL} from '../utils/theme/constants';
import Toast from 'react-native-toast-message';

export interface IClients {
  _id: string;
  name: string;
}

const useClients = () => {
  const getClients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/client`);

      if (!res?.data?.data) {
        return;
      }

      const clients: IClients[] = res.data.data.clients;
      return clients;
    } catch (e) {
      console.log('getClients', e);
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e?.response?.data?.message ?? 'Error Occured',
        text2: 'Please try again',
      });
    }
  };

  return {
    getClients,
  };
};

export default useClients;
