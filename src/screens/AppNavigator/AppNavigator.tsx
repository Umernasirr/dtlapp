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

const AppNavigator = () => {
  const AuthTab = createNativeStackNavigator();
  const BottomTab = createMaterialBottomTabNavigator();

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
    </BottomTab.Navigator>
  );

  return (
    <AuthTab.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthTab.Screen name="Login" component={Login} />
      <AuthTab.Screen name="Signup" component={Signup} />

      <AuthTab.Screen name="Home" component={BottomNavigation} />
    </AuthTab.Navigator>
  );
};

export default AppNavigator;
