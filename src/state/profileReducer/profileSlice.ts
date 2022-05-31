import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProfileState {
  profiles: IProfileItem[];
  activeProfile: IProfileItem | undefined;
}

export interface IProfileItem {
  _id: string;
  userId: string;
  client: {
    _id: string;
    name: string;
  };
  balance: number;
  status: boolean;
}

const getInitialState = (): IProfileState => {
  return {
    profiles: [],
    activeProfile: undefined,
  };
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: getInitialState(),
  reducers: {
    setProfiles(state, action: PayloadAction<IProfileItem[]>) {
      state.profiles = action.payload;
    },

    setActiveProfile(state, action: PayloadAction<IProfileItem>) {
      state.activeProfile = action.payload;
    },
  },
});

export default profileSlice;
