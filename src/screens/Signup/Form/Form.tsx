import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Spacer from '../../../components/Spacer';
import {ILoginForm} from '../types';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {TextInput} from 'react-native-paper';
import {Colors} from '../../../utils/theme';
import useAuth from '../../../hooks/useAuth/useAuth';
import Toast from 'react-native-toast-message';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .max(11, 'Phone Number can not be longer than 11 characters')
    .required('Phone Number is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(2, 'Password must be longer than 2 characters')
    .required('Password is required'),
});

const Form = () => {
  const {register} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: ILoginForm = {
    password: '',
    phoneNumber: '',
    name: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      handleRegister(values);
    },
    validationSchema: LoginSchema,
  });

  const handleRegister = (values: ILoginForm) => {
    if (!formik.isValid) {
      return;
    }

    const {phoneNumber, password, name} = values;

    try {
      register(phoneNumber, password, name);
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        // @ts-ignore
        text1: e.response.data.message ?? 'Error Occured',
        text2: 'Please try again',
      });
    }
  };

  return (
    <>
      <View style={styles.inputWrapper}>
        <TextInput
          defaultValue={formik.values.phoneNumber}
          onChangeText={formik.handleChange('phoneNumber')}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Phone Number - 03XXXXXXXXX"
        />

        <FeatherIcon
          name="phone"
          size={20}
          style={styles.inputAdornment}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      {formik.errors.phoneNumber ? (
        <Text style={styles.errorText}>{formik.errors.phoneNumber}</Text>
      ) : (
        <View style={styles.noErrorText} />
      )}

      <Spacer />

      <View style={styles.inputWrapper}>
        <TextInput
          defaultValue={formik.values.name}
          onChangeText={formik.handleChange('name')}
          style={styles.input}
          placeholder="Name"
        />

        <MaterialIcons
          name="person-outline"
          size={20}
          style={styles.inputAdornment}
        />
      </View>

      {formik.errors.name ? (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      ) : (
        <View style={styles.noErrorText} />
      )}

      <Spacer />

      <View style={styles.inputWrapper}>
        <TextInput
          defaultValue={formik.values.password}
          onChangeText={formik.handleChange('password')}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <FeatherIcon
          name={!showPassword ? 'eye' : 'eye-off'}
          size={20}
          style={styles.inputAdornment}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <Spacer />

      {formik.errors.password ? (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      ) : (
        <View style={styles.noErrorText} />
      )}

      <Spacer />

      <TouchableOpacity
        disabled={
          formik.values.phoneNumber === '' || formik.values.password === ''
        }
        style={
          formik.values.phoneNumber !== '' || formik.values.password !== ''
            ? styles.buttonPrimary
            : styles.buttonPrimaryDisabled
        }
        onPress={() => handleRegister(formik.values)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    backgroundColor: Colors.lightgray,
    elevation: 4,
    paddingHorizontal: 16,
    height: 60,
    borderRadius: 8,
  },
  inputWrapper: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputAdornment: {
    position: 'absolute',
    right: '15%',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
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

  buttonPrimaryDisabled: {
    width: '60%',
    height: 52,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',

    borderRadius: 12,
    backgroundColor: Colors.gray,
    elevation: 4,
  },

  errorText: {
    width: '80%',
    marginTop: 6,
    color: Colors.accent,
    height: 16,
    fontSize: 12,
  },
  noErrorText: {
    height: 12,
  },
});
