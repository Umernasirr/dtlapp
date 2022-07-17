import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IClientItem} from '../../../../state/clientReducer/clientSlice';
import {Colors} from '../../../../utils/theme';
import {TouchableRipple} from 'react-native-paper';

interface IProps {
  item: IClientItem;
  index: number;
  handleClick: (item: IClientItem) => void;
}
const ClientListItem: React.FC<IProps> = ({item, index, handleClick}) => {
  return (
    <TouchableRipple
      onPress={() => {
        handleClick(item);
      }}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {index + 1}.{'  '}
          {item.name}
        </Text>

        {item.name === 'DTL' && (
          <Image
            source={require('../../../../../assets/images/dtl-logo.png')}
            style={styles.logo}
          />
        )}

        {item.name === 'Dreamz' && (
          <Image
            source={require('../../../../../assets/images/dreams-logo.png')}
            style={styles.logo}
          />
        )}
      </View>
    </TouchableRipple>
  );
};

export default ClientListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    fontSize: 24,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
