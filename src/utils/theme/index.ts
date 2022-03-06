import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

const Colors = {
  primary: '#ed8153',
  accent: '#ff5722',
  tertiary: '#',
  white: '#ffffff',
  black: '#000000',
  gray: '#9e9e9e',
  lightgray: '#f5f5f5',
};

const paperTheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
  },
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  logo: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});

export {Colors, globalStyles, paperTheme};
