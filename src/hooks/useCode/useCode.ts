import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';

// @ts-ignore
import SweetAlert from 'react-native-sweet-alert';
import {useAppDispatch} from '../../state';
import {setActiveProfile} from '../../state/profileReducer';
import {IProfileItem} from '../../state/profileReducer/profileSlice';

const useCode = () => {
  const dispatch = useAppDispatch();
  const availCode = async (
    profileId: string,
    userId: string,
    codeId: string,
  ) => {
    try {
      const res = await axios.post(`${BASE_URL}/code/avail`, {
        profileId,
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
        const profile: IProfileItem = res?.data?.data?.profile;

        if (!profile) {
          return;
        }

        dispatch(setActiveProfile(profile));

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
