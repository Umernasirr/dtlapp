import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';

const AppNavigator = () => {
  const Auth = createNativeStackNavigator();

  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
};

export default AppNavigator;
