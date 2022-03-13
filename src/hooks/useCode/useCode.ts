import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';

const useCode = () => {
  const availCode = async (userId: string, codeId: string) => {
    try {
      const res = await axios.post(`${BASE_URL}/code/avail`, {
        userId,
        codeId,
      });

      if (!res.data) {
        return;
      }

      const data = res.data.data;

      console.log(data);

      //UPDATE THE USER BALANCE HERE
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return {
    availCode,
  };
};

export default useCode;
