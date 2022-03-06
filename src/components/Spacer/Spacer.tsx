import {StyleSheet, View} from 'react-native';
import React from 'react';

const Spacer = () => {
  return <View style={styles.spacer} />;
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    marginVertical: 8,
  },
});
