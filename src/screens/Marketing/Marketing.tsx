import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import {useAppSelector} from '../../state';
import BigSpacer from '../../components/BigSpacer';

const Marketing = () => {
  const {activeClient} = useAppSelector(state => state.clients);

  return (
    <SafeAreaView style={globalStyles.container}>
      <BigSpacer />
      {activeClient?.name === 'DTL' && (
        <Image
          source={require('../../../assets/images/dtl-logo.png')}
          style={globalStyles.logo}
        />
      )}
      <Spacer />

      <Text style={styles.dashboardName}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
        eleifend libero, ac gravida dui. Cras placerat magna ac lacus consequat,
        at luctus orci volutpat. Duis eu euismod ante. Vivamus aliquet orci vel
        vulputate laoreet. Ut consectetur risus ut dignissim pretium. Ut et
        vulputate mauris. Donec dapibus venenatis nisi a egestas. Curabitur
        tincidunt ex sed lacinia mollis.
      </Text>

      <Spacer />
    </SafeAreaView>
  );
};

export default Marketing;

const styles = StyleSheet.create({
  dashboardName: {
    marginHorizontal: '5%',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
