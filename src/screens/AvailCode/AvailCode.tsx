import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Text} from 'react-native-paper';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useAppDispatch, useAppSelector} from '../../state';
import useCode from '../../hooks/useCode';
import axios from 'axios';
import {BASE_URL} from '../../utils/theme/constants';
import {setTransactions} from '../../state/transactionReducer';
import BigSpacer from '../../components/BigSpacer';

const AvailCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFlash, setIsFlash] = useState(false);
  const {user} = useAppSelector(state => state.user);
  const {activeProfile} = useAppSelector(state => state.profiles);
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
    <SafeAreaView style={styles.container}>
      {!isLoading ? (
        <QRCodeScanner
          fadeIn
          onRead={onSuccess}
          cameraStyle={styles.qrCameraContainer}
          flashMode={
            isFlash
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          bottomViewStyle={{
            position: 'absolute',
            height: '100%',
          }}
          bottomContent={
            <>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/marker.png')}
                  style={styles.marker}
                />
                <BigSpacer />
              </View>

              <TouchableOpacity
                style={styles.qrText}
                onPress={() => {
                  setIsFlash(!isFlash);
                }}>
                <Text>Turn Flash {isFlash ? 'off' : 'on'}</Text>
              </TouchableOpacity>
            </>
          }
        />
      ) : (
        <>
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
  qrContainer: {},
  qrCameraContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  qrText: {
    backgroundColor: Colors.white,
    padding: 12,
    opacity: 0.6,
    borderRadius: 12,
    zIndex: 999,
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 4,
  },

  marker: {
    width: 200,
    height: 200,
    opacity: 0.6,
  },
});
