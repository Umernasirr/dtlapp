import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Spacer from '../../components/Spacer';
import {Colors, globalStyles} from '../../utils/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import TransactionHistory from '../../components/TransactionHistory';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Transactions = () => {
  const navigation = useNavigation();
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
        <TransactionHistory />
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
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
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
