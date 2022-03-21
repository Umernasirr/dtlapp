import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Spacer from '../../components/Spacer';
import {Colors, globalStyles} from '../../utils/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import TransactionHistory from '../../components/TransactionHistory';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../state';

const Transactions = () => {
  const navigation = useNavigation();
  const {transactions} = useAppSelector(state => state.transactions);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Spacer />
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />
      <Text style={styles.transactionHeading}>Transaction History</Text>
      <Spacer />
      <View style={styles.historyWrapper}>
        <TransactionHistory transactionList={transactions} />
      </View>

      <Spacer />
      <Button
        onPress={() =>
          // @ts-ignore
          navigation.navigate('Dashboard')
        }>
        <Text>Back to Home</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  transactionHeading: {
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: '10%',
    borderRadius: 4,
    paddingVertical: 4,
  },
  historyWrapper: {
    marginHorizontal: '5%',
    flex: 0.95,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
  },
});
