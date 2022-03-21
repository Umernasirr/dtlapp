import userSlice from './userSlice';

export const {storeToken, setUser, setUserBalance, removeToken} =
  userSlice.actions;

export default userSlice.reducer;
