import {StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import BigSpacer from '../../components/BigSpacer';
import Form from './Form/Form';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.authContainer}>
      <Image
        source={require('../../../assets/images/ustaad-logo.png')}
        style={globalStyles.ustaadLogo}
      />
      <Spacer />

      <Text style={styles.heading}>Signup</Text>

      <BigSpacer />

      <Form />

      <Spacer />

      <TouchableRipple
        style={styles.buttonWhite}
        // @ts-ignore
        onPress={() => navigation.navigate('Login')}>
        <Text>Back to Login</Text>
      </TouchableRipple>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: Colors.lightgray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonWhite: {
    width: '40%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: Colors.lightgray,
    elevation: 4,
  },
});
