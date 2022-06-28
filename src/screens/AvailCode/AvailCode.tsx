import {Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Spacer from '../../components/Spacer';
import {Colors, globalStyles} from '../../utils/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import BigSpacer from '../../components/BigSpacer';
import {useAppDispatch, useAppSelector} from '../../state';
import useCode from '../../hooks/useCode';
import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';
import {setTransactions} from '../../state/transactionReducer';

const AvailCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useAppSelector(state => state.user);
  const {activeProfile} = useAppSelector(state => state.profiles);
  const {activeClient} = useAppSelector(state => state.clients);
  const dispatch = useAppDispatch();
  const {availCode} = useCode();
  const onSuccess = (e: any) => {
    setIsLoading(true);
    handleAvailCode(e.data);
  };

  const handleAvailCode = async (codeId: string) => {
    if (!activeProfile) {
      return;
    }

    const updateTransactions = await availCode(
      activeProfile._id,
      user._id,
      codeId,
    );

    updateTransactions && getTransactionsFn();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const getTransactionsFn = async () => {
    const res2 = await axios.get(`${BASE_URL}/transaction/${user._id}`);

    if (!res2?.data?.data?.transactions) {
      return;
    }
    const transactions = res2?.data?.data?.transactions;

    dispatch(setTransactions(transactions));
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Spacer />
      {activeClient?.name === 'DTL' && (
        <Image
          source={require('../../../assets/images/dtl-logo.png')}
          style={globalStyles.logo}
        />
      )}
      <Spacer />

      <Text style={styles.availCodeHeading}>Scan Code</Text>
      <Spacer />

      {!isLoading ? (
        <QRCodeScanner
          cameraContainerStyle={styles.qrContainer}
          fadeIn
          containerStyle={styles.qrContainer}
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          bottomContent={
            <>
              <Image
                source={require('../../../assets/images/marker.png')}
                style={styles.marker}
              />
              <Text style={styles.qrText}>Point at QR code to Scan</Text>
            </>
          }
        />
      ) : (
        <>
          <BigSpacer />
          <ActivityIndicator size={40} />
        </>
      )}
    </SafeAreaView>
  );
};

export default AvailCode;

const styles = StyleSheet.create({
  availCodeHeading: {
    fontSize: 30,
    textAlign: 'center',
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
    marginHorizontal: '10%',
    borderRadius: 4,
    paddingVertical: 4,
    color: Colors.gray,
  },
  codeInput: {
    marginHorizontal: '5%',
    backgroundColor: Colors.lightgray,
    padding: 12,
    borderRadius: 8,
    borderColor: Colors.primary,
    borderWidth: 1.5,
  },
  cameraButton: {
    marginHorizontal: '10%',
  },
  availButton: {
    marginHorizontal: '10%',
    backgroundColor: Colors.primary,
  },
  qrContainer: {
    height: '70%',
  },
  qrText: {
    backgroundColor: Colors.white,
    padding: 12,
    opacity: 0.8,
    borderRadius: 12,
    position: 'absolute',
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 4,
  },

  marker: {
    width: 200,
    height: 200,
    marginBottom: '150%',
    opacity: 0.6,
  },
});
