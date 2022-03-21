import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../state';
import {storeToken, setUser, removeToken} from '../../state/userReducer';
import {BASE_URL} from '../../utils/theme/constants';

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
    } catch (e) {
      console.log('getMe', e);
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
      console.log(e);
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
    }
  };

  const logout = () => {
    dispatch(removeToken());
  };
  return {user, login, logout, register, getMe, checkToken};
};

export default useAuth;
