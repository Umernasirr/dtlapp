import {StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import BigSpacer from '../../components/BigSpacer';
import Form from './Form/Form';
import useAuth from '../../hooks/useAuth/useAuth';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';

const Signup = () => {
  const {checkToken} = useAuth();

  const navigation = useNavigation();
  useEffect(() => {
    checkToken().then(isLoggedIn => {
      if (isLoggedIn) {
        // @ts-ignore
        // navigation.navigate('Home');
      }
    });
  }, [checkToken, navigation]);

  return (
    <SafeAreaView style={styles.authContainer}>
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
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
