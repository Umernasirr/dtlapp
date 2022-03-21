import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITransactionItem} from '../../components/TransactionHistory/TransactionHistory';

interface ITransactionState {
  transactions: ITransactionItem[];
}

const getInitialState = (): ITransactionState => {
  return {
    transactions: [],
  };
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: getInitialState(),
  reducers: {
    setTransactions(state, action: PayloadAction<ITransactionItem[]>) {
      state.transactions = action.payload;
    },
  },
});

export default transactionSlice;
