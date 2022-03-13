import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';

const useCode = (userId: string) => {
  const availCode = async (codeId: string) => {
    console.log(userId);
    try {
      const res = await axios.post(`${BASE_URL}/code/avail`, {
        codeId,
      });

      if (!res.data) {
        return;
      }

      const data = res.data.data;

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    availCode,
  };
};

export default useCode;
