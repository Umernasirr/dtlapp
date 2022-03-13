import {StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import BigSpacer from '../../components/BigSpacer';
import Form from './Form/Form';
import useAuth from '../../hooks/useAuth/useAuth';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';

const Login = () => {
  const {checkToken, getMe} = useAuth();
  const navigation = useNavigation();
  useEffect(() => {
    const getDetails = async () => {
      const isLoggedIn = await checkToken();

      if (isLoggedIn) {
        await getMe();

        // @ts-ignore
        navigation.navigate('Home');
      }
    };

    getDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignup = () => {
    // @ts-ignore
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />

      <Text style={styles.heading}>Login</Text>

      <BigSpacer />

      <Form />

      <Spacer />

      <TouchableRipple style={styles.buttonWhite} onPress={handleSignup}>
        <Text>Sign Up</Text>
      </TouchableRipple>
    </SafeAreaView>
  );
};

export default Login;

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
