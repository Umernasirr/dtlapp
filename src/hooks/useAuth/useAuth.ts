import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../state';
import {storeToken, setUser, removeToken} from '../../state/userReducer';
import {BASE_URL} from '../../utils/theme/constants';
import SweetAlert from 'react-native-sweet-alert';
import Toast from 'react-native-toast-message';

const useAuth = () => {
  const {user} = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('@token');

    return token;
  };

  const getMe = async () => {
    const token = await checkToken();

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/me`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.data) {
        return;
      }

      const data = res.data.data;

      dispatch(setUser(data.user));
      dispatch(storeToken(data.token));

      return true;
    } catch (e) {
      // @ts-ignore
      console.log('getMe', e.response.data);
      dispatch(removeToken());
      return false;
    }
  };

  const login = async (phoneNumber: string, password: string) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        phoneNumber,
        password,
      });

      if (!res.data) {
        return;
      }

      const data = res.data.data;

      dispatch(setUser(data.user));
      dispatch(storeToken(data.token));
      return true;
    } catch (e) {
      console.log('login', e);
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e.response.data.message ?? 'Error Occured',
        text2: 'Please try again',
      });
    }
  };

  const register = async (
    phoneNumber: string,
    password: string,
    name: string,
  ) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        phoneNumber,
        password,
        name,
      });

      if (!res.data) {
        return;
      }

      const data = res.data.data;

      dispatch(setUser(data.user));
      dispatch(storeToken(data.token));
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e.response.data.message ?? 'Error Occured',
        text2: 'Please try again',
      });
    }
  };

  const logout = () => {
    dispatch(removeToken());
  };
  return {user, login, logout, register, getMe, checkToken};
};

export default useAuth;
