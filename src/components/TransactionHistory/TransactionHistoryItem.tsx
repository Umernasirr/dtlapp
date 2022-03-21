import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ITransactionItem} from './TransactionHistory';
import moment from 'moment';

interface IProps {
  item: ITransactionItem;
}
const TransactionHistoryItem: React.FC<IProps> = ({item}) => {
  const time = moment(item.createdAt).fromNow();

  return (
    <View style={styles.row}>
      <Text>{item.productName}</Text>
      <Text>{time}</Text>
      <Text>{item.price} Rupees</Text>
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
