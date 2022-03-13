import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BigSpacer from '../../components/BigSpacer';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import {TouchableRipple} from 'react-native-paper';
import TransactionHistory from '../../components/TransactionHistory';
import {useAppSelector} from '../../state';
import {useNavigation} from '@react-navigation/native';
const Dashboard = () => {
  const {user} = useAppSelector(state => state.user);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyles.container}>
      <Spacer />
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />

      <Text style={styles.dashboardName}>
        Hi {user.name}, welcome to the DTL Ledger App
      </Text>
      <Spacer />

      <View style={styles.dashboardWrapper}>
        <Text style={styles.dashboardHeading}>{user.balance} PKR</Text>
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
          <Text style={styles.buttonText}>Avail Code</Text>
        </TouchableRipple>
      </View>

      <Spacer />

      <View style={styles.historyWrapper}>
        <Text style={styles.heading}>Transaction History</Text>
        <Spacer />
        <TransactionHistory />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardName: {
    marginHorizontal: '5%',
    marginRight: '20%',
    fontSize: 20,
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
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
    paddingVertical: 4,
    marginVertical: 8,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 4,
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
    fontSize: 20,
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
