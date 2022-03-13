import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITransactionItem} from './TransactionHistory';

interface IProps {
  item: ITransactionItem;
}
const TransactionHistoryItem: React.FC<IProps> = ({item}) => {
  return (
    <View style={styles.row}>
      <Text>{item.name}</Text>
      <Text>{item.amount} PKR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default TransactionHistoryItem;
