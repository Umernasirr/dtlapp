import {Image, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BigSpacer from '../../components/BigSpacer';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import {TouchableRipple} from 'react-native-paper';
import TransactionHistory from '../../components/TransactionHistory';
import {useAppDispatch, useAppSelector} from '../../state';
import {useNavigation} from '@react-navigation/native';
import useTransaction from '../../hooks/useTransaction';
import {setTransactions} from '../../state/transactionReducer/';

import FeatherIcon from 'react-native-vector-icons/Feather';

const Dashboard = () => {
  const {user} = useAppSelector(state => state.user);
  const {transactions} = useAppSelector(state => state.transactions);
  const {activeProfile} = useAppSelector(state => state.profiles);
  const {getTransactions} = useTransaction();

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const getPaid = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };

  useEffect(() => {
    const getTransactionsFn = async () => {
      const data = await getTransactions(user._id);

      data && dispatch(setTransactions(data));
    };

    getTransactionsFn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Spacer />
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />

      <Text style={styles.dashboardName}>
        Hi {user.name}, welcome to the Ustaad Ledger Application
      </Text>
      <Spacer />

      <View style={styles.dashboardWrapper}>
        <Text style={styles.dashboardHeading}>
          {activeProfile?.balance} PKR
        </Text>
        <Text style={styles.dashboardSubHeading}>Total Balance</Text>
        <BigSpacer />
      </View>

      <Spacer />

      <View style={styles.buttonWrapper}>
        <TouchableRipple
          style={styles.buttonPrimary}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('Scan Code');
          }}>
          <Text style={styles.buttonText}>
            <FeatherIcon name="camera" size={20} /> Scan Codes
          </Text>
        </TouchableRipple>
      </View>

      <Spacer />

      {activeProfile?.balance && activeProfile.balance > 0 && (
        <View style={styles.buttonWrapper}>
          <TouchableRipple style={styles.buttonWhite} onPress={() => getPaid()}>
            <Text style={styles.buttonWhiteText}>Get Paid</Text>
          </TouchableRipple>
        </View>
      )}

      <Spacer />

      {transactions.length > 0 && (
        <View style={styles.historyWrapper}>
          <Text style={styles.heading}>Recent Transactions</Text>

          <TransactionHistory transactionList={transactions.slice(0, 10)} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardName: {
    marginHorizontal: '5%',
    marginRight: '20%',
    fontSize: 16,
    fontWeight: '500',
  },

  dashboardWrapper: {
    backgroundColor: '#fdfdfd',
    elevation: 1,
    marginHorizontal: '5%',
    borderRadius: 12,
  },

  dashboardHeading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    paddingVertical: 4,
    marginVertical: 8,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
    marginHorizontal: '10%',
    borderRadius: 4,
  },

  dashboardSubHeading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  historyWrapper: {
    backgroundColor: '#fdfdfd',
    elevation: 1,
    flex: 0.9,
    marginHorizontal: '5%',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  heading: {
    fontSize: 18,
    textAlign: 'center',
  },

  buttonPrimary: {
    height: 45,
    width: 200,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },

  buttonWhite: {
    height: 45,
    width: 200,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.gray,
    borderWidth: 1.5,
  },
  buttonWhiteText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
