import React, {useEffect} from 'react';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../../utils/theme';
import Signup from '../Signup';
import Transactions from '../Transactions';
import AvailCode from '../AvailCode';
import useAuth from '../../hooks/useAuth/useAuth';
import Settings from '../Settings';
import {StackActions, useNavigation} from '@react-navigation/native';
import Clients from '../Clients';

const AppNavigator = () => {
  const navigation = useNavigation();

  const {checkToken, getMe} = useAuth();

  const AuthTab = createNativeStackNavigator();
  const MainStack = createNativeStackNavigator();
  const AppStack = createNativeStackNavigator();
  const BottomTab = createMaterialBottomTabNavigator();

  const AuthNavigation = () => {
    useEffect(() => {
      const getData = async () => {
        const token = await checkToken();

        if (token) {
          await getMe();

          navigation.dispatch(StackActions.replace('App'));
        }
      };

      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <AuthTab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthTab.Screen name="Login" component={Login} />
        <AuthTab.Screen name="Signup" component={Signup} />
      </AuthTab.Navigator>
    );
  };

  const AppNavigation = () => (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="clients" component={Clients} />

      <AppStack.Screen name="BottomNavigation" component={BottomNavigation} />
    </AppStack.Navigator>
  );

  const BottomNavigation = () => (
    <BottomTab.Navigator
      activeColor={Colors.white}
      inactiveColor={Colors.black}
      barStyle={{backgroundColor: Colors.primary}}
      shifting={false}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} size={25} name={'home'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Scan Code"
        component={AvailCode}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign color={color} size={25} name={'barcode'} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} size={25} name={'history'} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} size={25} name={'settings'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Auth" component={AuthNavigation} />
      <MainStack.Screen name="App" component={AppNavigation} />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
