import React from 'react';
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
import Settings from '../Settings';
import Clients from '../Clients';
import SplashScreen from '../SplashScreen';

const AppNavigator = () => {
  const AuthTab = createNativeStackNavigator();
  const MainStack = createNativeStackNavigator();
  const AppStack = createNativeStackNavigator();
  const BottomTab = createMaterialBottomTabNavigator();

  const AuthNavigation = () => {
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
      <MainStack.Screen name="Splash" component={SplashScreen} />

      <MainStack.Screen name="Auth" component={AuthNavigation} />
      <MainStack.Screen name="App" component={AppNavigation} />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
