import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {store} from './src/state';
import {Provider} from 'react-redux';
import AppNavigator from './src/screens/AppNavigator';
import {paperTheme} from './src/utils/theme';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={paperTheme}>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
