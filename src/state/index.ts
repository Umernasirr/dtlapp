import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import transactionReducer from './transactionReducer';
import profileReducer from './profileReducer';
import clientReducer from './clientReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
    profiles: profileReducer,
    clients: clientReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
