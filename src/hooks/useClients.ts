import axios from 'axios';
import {BASE_URL} from '../utils/theme/constants';

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
    }
  };

  return {
    getClients,
  };
};

export default useClients;
