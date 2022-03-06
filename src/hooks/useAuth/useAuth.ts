import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../state';
import {storeToken} from '../../state/userReducer';
import {BASE_URL} from '../../utils/theme/constants';

const useAuth = () => {
  const userState = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('@token');

    return token;
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

      dispatch(storeToken(data.token));
    } catch (e) {
      console.log(e);
    }
  };
  return {user: userState.user, login, checkToken};
};

export default useAuth;
