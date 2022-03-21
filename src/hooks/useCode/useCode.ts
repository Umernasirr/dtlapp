import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';

import SweetAlert from 'react-native-sweet-alert';
import {useAppDispatch} from '../../state';
import {setUserBalance} from '../../state/userReducer';
import {IUser} from '../useAuth/types';

const useCode = () => {
  const dispatch = useAppDispatch();
  const availCode = async (userId: string, codeId: string) => {
    try {
      const res = await axios.post(`${BASE_URL}/code/avail`, {
        userId,
        codeId,
      });

      if (!res.data.data) {
        SweetAlert.showAlertWithOptions({
          title: res.data.message ?? 'Error Occured',
          subTitle: 'Please try again',
          style: 'error',
        });
        return false;
      } else {
        const user: IUser = res?.data?.data?.user;

        if (!user) {
          return;
        }
        dispatch(setUserBalance(user.balance));

        SweetAlert.showAlertWithOptions({
          title: 'Code Availed Succesfully',
          subTitle: 'The Balance has been added to your account',
          style: 'success',
        });

        return true;
      }
    } catch (e) {
      console.log('useCode', e);
      return false;
    }
  };

  return {
    availCode,
  };
};

export default useCode;
