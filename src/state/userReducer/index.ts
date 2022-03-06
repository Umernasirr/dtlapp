import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      _id: '',
      name: '',
      phoneNumber: '',
    },
    isLoggedIn: false,
  },
  reducers: {
    storeToken(state, action: PayloadAction<string>) {
      try {
        AsyncStorage.setItem('@token', action.payload);
      } catch (e) {
        console.log(e);
      }
    },

    //   storeToken (key: string, value: string) {
    //   try {
    //     await AsyncStorage.setItem(`@${key}`, value);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
  },
});

export const {storeToken} = userSlice.actions;

export default userSlice.reducer;
