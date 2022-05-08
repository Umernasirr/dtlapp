import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IClientState {
  clients: IClientItem[];
  activeClient: IClientItem | undefined;
}

export interface IClientItem {
  _id: string;
  name: string;
}

const getInitialState = (): IClientState => {
  return {
    clients: [],
    activeClient: undefined,
  };
};

const clientSlice = createSlice({
  name: 'client',
  initialState: getInitialState(),
  reducers: {
    setClients(state, action: PayloadAction<IClientItem[]>) {
      state.clients = action.payload;
    },

    setActiveClient(state, action: PayloadAction<IClientItem>) {
      state.activeClient = action.payload;
    },
  },
});

export default clientSlice;
