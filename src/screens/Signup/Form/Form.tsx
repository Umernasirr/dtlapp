import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Spacer from '../../../components/Spacer';
import {ILoginForm} from '../types';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ActivityIndicator, TextInput} from 'react-native-paper';
import {Colors} from '../../../utils/theme';
import useAuth from '../../../hooks/useAuth/useAuth';
import {useNavigation} from '@react-navigation/native';
// import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import DropDown from 'react-native-paper-dropdown';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .max(11, 'Phone Number can not be longer than 11 characters')
    .required('Phone Number is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(2, 'Password must be longer than 2 characters')
    .required('Password is required'),
  city: Yup.string().required('City is required'),
  shopNo: Yup.string().required('Shop Number is required'),
});

const Form = () => {
  const {register} = useAuth();
  const [location, setLocation] = useState('');
  const [mechanic, setMechanic] = useState('');

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const initialValues: ILoginForm = {
    password: '',
    phoneNumber: '',
    name: '',
    email: '',
    shopNo: '',
    city: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {},

    validationSchema: LoginSchema,
  });
  const categoryList = [
    {
      label: 'Motorcycle Mechanic',
      value: 'Motorcycle Mechanic',
    },
    {
      label: 'Rikshaw Mechanic',
      value: 'femRikshaw Mechanicale',
    },
    {
      label: 'Car/SUV Mechanic',
      value: 'Car/SUV Mechanic',
    },
    {
      label: 'Other',
      value: 'other',
    },
  ];

  const handleRegister = async (values: ILoginForm) => {
    if (!formik.isValid) {
      return;
    }

    setIsLoading(true);
    const {phoneNumber, password, name, city, email, shopNo} = values;

    try {
      const isRegistered = await register(
        phoneNumber,
        password,
        name,
        city,
        email,
        shopNo,
        location,
        mechanic,
      );

      setIsLoading(false);
      if (isRegistered) {
        // @ts-ignore
        navigation.navigate('Login');
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
      Geolocation.requestAuthorization();
      Geolocation.getCurrentPosition(
        pos => {
          const loc = `${pos.coords.latitude},${pos.coords.longitude}`;
          setLocation(loc);
        },
        error => {
          console.log(error, 'error');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      Geolocation.getCurrentPosition(
        pos => {
          const loc = `${pos.coords.latitude},${pos.coords.longitude}`;
          setLocation(loc);
        },
        error => {
          console.log(error, 'error');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, []);

  return (
    <>
      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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

        {formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        ) : (
          <View style={styles.noErrorText} />
        )}

        <Spacer />

        <View style={styles.inputWrapper}>
          <TextInput
            defaultValue={formik.values.shopNo}
            onChangeText={formik.handleChange('shopNo')}
            style={styles.input}
            placeholder="Shop Number"
          />
          <MaterialCommunityIcons
            name="store-outline"
            size={20}
            style={styles.inputAdornment}
          />
        </View>
        {formik.errors.shopNo ? (
          <Text style={styles.errorText}>{formik.errors.shopNo}</Text>
        ) : (
          <View style={styles.noErrorText} />
        )}

        <Spacer />

        <View style={styles.inputWrapper}>
          <TextInput
            defaultValue={formik.values.city}
            onChangeText={formik.handleChange('city')}
            style={styles.input}
            placeholder="City"
          />
          <MaterialCommunityIcons
            name="city"
            size={20}
            style={styles.inputAdornment}
          />
        </View>
        {formik.errors.city ? (
          <Text style={styles.errorText}>{formik.errors.city}</Text>
        ) : (
          <View style={styles.noErrorText} />
        )}

        <Spacer />

        <View style={styles.dropdownWrapper}>
          <DropDown
            label={'Category'}
            mode={'outlined'}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={mechanic}
            setValue={setMechanic}
            list={categoryList}
          />
        </View>
        <Spacer />

        <View style={styles.inputWrapper}>
          <TextInput
            defaultValue={formik.values.email}
            onChangeText={formik.handleChange('email')}
            style={styles.input}
            placeholder="Email (Optional)"
            secureTextEntry={!showPassword}
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            style={styles.inputAdornment}
          />
        </View>

        {formik.errors.email ? (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        ) : (
          <View style={styles.noErrorText} />
        )}

        <Spacer />
      </ScrollView>

      <TouchableOpacity
        disabled={
          formik.values.phoneNumber === '' ||
          formik.values.password === '' ||
          formik.values.name === '' ||
          formik.values.shopNo === '' ||
          formik.values.city === '' ||
          mechanic === ''
        }
        style={
          formik.values.phoneNumber !== '' &&
          formik.values.password !== '' &&
          formik.values.name !== '' &&
          formik.values.shopNo !== '' &&
          formik.values.city !== '' &&
          mechanic !== ''
            ? styles.buttonPrimary
            : styles.buttonPrimaryDisabled
        }
        onPress={() => handleRegister(formik.values)}>
        {isLoading ? (
          <ActivityIndicator size={40} color="white" />
        ) : (
          <Text style={styles.buttonText}>Signup</Text>
        )}
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

  dropdownWrapper: {
    width: '80%',
    backgroundColor: 'white',
    color: 'white',
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
    paddingTop: 4,
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
    paddingTop: 4,
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
