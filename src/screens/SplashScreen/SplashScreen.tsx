import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import BigSpacer from '../../components/BigSpacer';
import {StackActions, useNavigation} from '@react-navigation/native';
import useAuth from '../../hooks/useAuth/useAuth';

const SplashScreen = () => {
  const navigation = useNavigation();

  const {checkToken, getMe} = useAuth();
  useEffect(() => {
    const getData = async () => {
      const token = await checkToken();

      console.log(token, 'token');
      if (token) {
        await getMe();

        setTimeout(() => {
          navigation.dispatch(StackActions.replace('App'));
        }, 100);
      } else {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('Auth'));
        }, 100);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.authContainer}>
      <Image
        source={require('../../../assets/images/ustaad-logo.png')}
        style={styles.logo}
      />
      <Spacer />

      <BigSpacer />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: Colors.lightgray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 20,
  },
  logo: {
    height: 160,
    width: 260,
    padding: 20,
    resizeMode: 'stretch',
    borderRadius: 40,
  },
});
