import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../utils/theme';
import {FlatList, StyleSheet, Text} from 'react-native';
import BigSpacer from '../../components/BigSpacer';
import useClients from '../../hooks/useClients';
import {setActiveClient, setClients} from '../../state/clientReducer';
import {useAppDispatch, useAppSelector} from '../../state';
import ClientListItem from './components/ClientListItem';
import {IClientItem} from '../../state/clientReducer/clientSlice';
import {useNavigation} from '@react-navigation/native';
import useProfiles from '../../hooks/useProfiles';
import {setActiveProfile, setProfiles} from '../../state/profileReducer';

const Clients = () => {
  const {getClients} = useClients();

  const {user} = useAppSelector(state => state.user);
  const {profiles} = useAppSelector(state => state.profiles);
  const {getProfiles, createProfile} = useProfiles(user._id);

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const clients = useAppSelector(state => state.clients.clients);

  useEffect(() => {
    const getClientsFn = async () => {
      const data = await getClients();

      data && dispatch(setClients(data));
    };

    const getProfilesFn = async () => {
      const data = await getProfiles();

      data && dispatch(setProfiles(data));
    };

    getClientsFn();
    getProfilesFn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = async (item: IClientItem) => {
    const profileExists = profiles.find(
      profile => profile.clientId === item._id,
    );

    if (!profileExists) {
      const updatedProfiles = await createProfile(item._id);
      if (!updatedProfiles || updatedProfiles?.length <= 0) {
        return;
      }
      const activeProfile = updatedProfiles.find(
        profile => profile.clientId === item?._id,
      );

      dispatch(setProfiles(updatedProfiles));

      activeProfile && dispatch(setActiveProfile(activeProfile));
      dispatch(setActiveClient(item));
    }

    dispatch(setActiveClient(item));
    const activeProfile = profiles.find(
      profile => profile.clientId === item?._id,
    );
    activeProfile && dispatch(setActiveProfile(activeProfile));

    // @ts-ignore
    navigation.navigate('BottomNavigation');
  };

  const renderItem = useCallback(
    ({item, index}) => (
      <ClientListItem item={item} index={index} handleClick={handleClick} />
    ),
    [handleClick],
  );

  const keyExtractor = useCallback(
    (item: IClientItem) => item._id.toString(),
    [],
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <BigSpacer />
      <Text style={styles.companyHeader}>Select Company</Text>

      <BigSpacer />

      <FlatList
        data={clients}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Clients;

const styles = StyleSheet.create({
  companyHeader: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
