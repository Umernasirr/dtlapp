import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BigSpacer from '../../components/BigSpacer';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import {TouchableRipple} from 'react-native-paper';
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <BigSpacer />
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />

      <Text style={styles.dashboardName}>
        Hi User, welcome to the DTL Ledger App
      </Text>
      <BigSpacer />

      <View style={styles.dashboardWrapper}>
        <Spacer />

        <Text style={styles.dashboardHeading}>12,670 PKR</Text>
        <Text style={styles.dashboardSubHeading}>Total Earnings</Text>
        <BigSpacer />
      </View>

      <BigSpacer />

      <View style={styles.buttonWrapper}>
        <TouchableRipple style={styles.buttonPrimary} onPress={() => {}}>
          <Text style={styles.buttonText}>Avail Code</Text>
        </TouchableRipple>
      </View>

      <BigSpacer />

      <View style={styles.buttonWrapper}>
        <TouchableRipple style={styles.buttonWhite} onPress={() => {}}>
          <Text style={styles.buttonWhiteText}>View History</Text>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
  },
  dashboardName: {
    marginHorizontal: '5%',
    fontSize: 24,
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
    fontSize: 42,
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

  buttonPrimary: {
    height: 50,
    width: 240,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },

  buttonWhite: {
    height: 50,
    width: 240,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
