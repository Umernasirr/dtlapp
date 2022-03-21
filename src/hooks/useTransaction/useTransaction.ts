import axios from 'axios';
import {ITransactionItem} from '../../components/TransactionHistory/TransactionHistory';
import {BASE_URL} from '../../utils/theme/constants';

const useTransaction = () => {
  const getTransactions = async (userId: string) => {
    if (!userId) {
      return;
    }
    try {
      const res = await axios.get(`${BASE_URL}/transaction/${userId}`);

      if (!res?.data?.data) {
        return;
      }

      const transactions: ITransactionItem[] = res.data.data.transactions;
      return transactions;
    } catch (e) {
      console.log('getTransactions', e);
    }
  };

  return {
    getTransactions,
  };
};

export default useTransaction;
