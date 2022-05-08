import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import {Colors} from '../../utils/theme';

export interface ITransactionItem {
  _id: number;
  productName: string;
  userId: string;
  price: number;
  createdAt: string;
}

interface IProps {
  transactionList: ITransactionItem[] | undefined;
}

const TransactionHistory: React.FC<IProps> = ({transactionList = []}) => {
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
      <View style={styles.headerRow}>
        <Text>Name</Text>

        <Text>Date</Text>

        <Text>Price</Text>
      </View>

      {transactionList.length > 0 ? (
        <FlatList
          data={transactionList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <Text>No Transaction yet...</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});
export default TransactionHistory;
