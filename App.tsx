import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/state';
import {Provider} from 'react-redux';
import AppNavigator from './src/screens/AppNavigator';
import {paperTheme} from './src/utils/theme';
import Toast from 'react-native-toast-message';
// import Geocoder from 'react-native-geocoding';

const App = () => {
  // Geocoder.init('AIzahurrdurrSyCGE4q1Ar4Qf_Cf97y5RRTQPrZ3iGAtx9Yhurrdurr'); // use a valid API key

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={paperTheme}>
          <AppNavigator />
          <Toast />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
