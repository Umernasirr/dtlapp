import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser, UserRole} from '../../hooks/useAuth/types';

interface IUserState {
  user: IUser;
  isLoggedIn: boolean;
}

const getInitialState = (): IUserState => {
  return {
    user: {
      _id: '',
      name: '',
      phoneNumber: '',
      status: false,
      role: UserRole.USER,
      city: '',
      email: '',
      location: '',
      mechanic: '',
      shopNo: '',
    },
    isLoggedIn: false,
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    storeToken(_, action: PayloadAction<string>) {
      try {
        AsyncStorage.setItem('@token', action.payload);
      } catch (e) {
        console.log(e);
      }
    },

    removeToken() {
      try {
        AsyncStorage.removeItem('@token');
      } catch (e) {
        console.log(e);
      }
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export default userSlice;
