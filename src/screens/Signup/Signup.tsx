import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import Form from './Form/Form';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.heading}>Create Account</Text>

      <Spacer />

      <Form />

      <Spacer />
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
