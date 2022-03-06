import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import BigSpacer from '../../components/BigSpacer';
import {useFormik} from 'formik';
import {ILoginForm} from './types';
import Icon from 'react-native-vector-icons/AntDesign';
const Login = () => {
  const initialValues: ILoginForm = {
    password: '',
    phoneNumber: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      handleLogin(values);
    },
  });

  const handleLogin = (val: ILoginForm) => {
    console.log('login', val);
  };
  const handleSignup = () => {
    console.log('signup');
  };
  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.heading}>DTL LOGO</Text>

      <Spacer />

      <Text style={styles.heading}>Login</Text>

      <BigSpacer />

      <>
        <View>
          <TextInput
            defaultValue={formik.values.phoneNumber}
            onChangeText={formik.handleChange('phoneNumber')}
            style={styles.input}
            placeholder="Phone Number"
          />
          <Icon.Button name="eye" />
        </View>
        <Spacer />

        <TextInput
          defaultValue={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <BigSpacer />

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </>

      <Spacer />

      <TouchableOpacity style={styles.buttonWhite} onPress={handleSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
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
  input: {
    width: '80%',
    backgroundColor: Colors.lightgray,
    elevation: 4,
    paddingHorizontal: 16,
    height: 60,
    borderRadius: 8,
  },

  buttonPrimary: {
    width: '60%',
    height: 52,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',

    borderRadius: 12,
    backgroundColor: Colors.primary,
    elevation: 4,
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

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
