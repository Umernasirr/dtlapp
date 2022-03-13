import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';

export interface ITransactionItem {
  name: string;
  _id: string;
  amount: number;
}
const TransactionHistory = () => {
  const transactionList: ITransactionItem[] = [
    {name: 'Product 1', _id: '1', amount: 20},
    {name: 'Product 2', _id: '2', amount: 30},
    {name: 'Product 3', _id: '3', amount: 40},
    {name: 'Product 1', _id: '4', amount: 20},
    {name: 'Product 2', _id: '5', amount: 30},
    {name: 'Product 3', _id: '6', amount: 40},
    {name: 'Product 1', _id: '7', amount: 20},
    {name: 'Product 2', _id: '8', amount: 30},
    {name: 'Product 3', _id: '9', amount: 40},
    {name: 'Product 1', _id: '0', amount: 20},
    {name: 'Product 2', _id: '10', amount: 30},
    {name: 'Product 3', _id: '11', amount: 40},
    {name: 'Product 1', _id: '12', amount: 20},
    {name: 'Product 2', _id: '13', amount: 30},
    {name: 'Product 3', _id: '14', amount: 40},
  ];

  const keyExtractor = useCallback(
    (item: ITransactionItem) => item._id.toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}) => <TransactionHistoryItem item={item} />,
    [],
  );

  return (
    <>
      <FlatList
        data={transactionList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default TransactionHistory;
