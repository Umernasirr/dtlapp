import {StyleSheet, Text, Image, View, Platform, Linking} from 'react-native';
import React from 'react';
import Spacer from '../../components/Spacer';
import {Colors, globalStyles} from '../../utils/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableRipple} from 'react-native-paper';
import BigSpacer from '../../components/BigSpacer';
import useAuth from '../../hooks/useAuth/useAuth';
import {useAppSelector} from '../../state';
import {StackActions, useNavigation} from '@react-navigation/native';

const Settings = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();
  const {user} = useAppSelector(state => state.user);

  const contactWhatsapp = () => {
    try {
      const text = `Hello, my name is ${user.name}, I would like to withdraw my balance`;

      const phoneNumber = '123456789';
      Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
    } catch (e) {
      console.log('Settings', e);
    }
  };

  const contactPhone = () => {
    try {
      let phoneNumber = '';

      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${1234567890}';
      } else {
        phoneNumber = 'telprompt:${1234567890}';
      }

      Linking.openURL(phoneNumber);
    } catch (e) {
      console.log('Settings', e);
    }
  };

  const logoutFn = () => {
    logout();
    navigation.dispatch(StackActions.replace('Auth'));
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <Spacer />
      <Image
        source={require('../../../assets/images/dtl-logo.png')}
        style={globalStyles.logo}
      />
      <Spacer />

      <Text style={styles.heading}>Settings</Text>
      <BigSpacer />
      <TouchableRipple style={styles.whatsappRow} onPress={contactWhatsapp}>
        <>
          <Text style={styles.whatsappText}>Contact us on Whatsapp</Text>
          <Image
            source={require('../../../assets/images/whatsapp.png')}
            style={styles.whatsappIcon}
          />
        </>
      </TouchableRipple>

      <BigSpacer />

      <TouchableRipple style={styles.whatsappRow} onPress={contactPhone}>
        <>
          <Text style={styles.whatsappText}>Contact us on Phone</Text>
          <Image
            source={require('../../../assets/images/phone.png')}
            style={styles.whatsappIcon}
          />
        </>
      </TouchableRipple>

      <BigSpacer />

      <View style={styles.buttonWrapper}>
        <TouchableRipple style={styles.buttonPrimary} onPress={logoutFn}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  whatsappRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
  whatsappText: {
    fontSize: 16,
  },
  whatsappIcon: {
    width: 40,
    height: 40,
  },

  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
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

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});