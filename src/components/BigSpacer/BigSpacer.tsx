import {StyleSheet, View} from 'react-native';
import React from 'react';

const BigSpacer = () => {
  return <View style={styles.bigSpacer} />;
};

export default BigSpacer;

const styles = StyleSheet.create({
  bigSpacer: {
    marginVertical: 16,
  },
});
