import userSlice from './userSlice';

export const {storeToken, setUser, removeToken} = userSlice.actions;

export default userSlice.reducer;
