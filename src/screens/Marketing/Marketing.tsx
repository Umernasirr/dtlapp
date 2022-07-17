import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../utils/theme';
import Spacer from '../../components/Spacer';
import {useAppSelector} from '../../state';
import BigSpacer from '../../components/BigSpacer';

const tableData = [
  {
    _id: 0,
    description: 'Description',
    urdu: 'اردو',
    model: 'Model',
    point: 'Points',
  },
  {
    _id: 1,
    description: 'BATTERY CHARGER - ADV RETIRE',
    urdu: 'بیٹری چارجر 12',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 2,
    description: 'BRAKE SHOE W/ LONG SPRING - FMC LEATHER',
    urdu: 'بریک شو بمہ اسپرنگ',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 3,
    description: 'BRAKE SHOE W/ SHORT SPRING - FMC LEATHER',
    urdu: 'بریک شو بمہ اسپرنگ',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 4,
    description: 'BRAKE SHOE W/ SHORT SPRING - FMC LEATHER',
    urdu: 'بریک شو بمہ اسپرنگ',
    model: 'A100',
    point: '3',
  },
  {
    _id: 5,
    description: 'CDI STARTING COIL "FULL COPPER',
    urdu: 'گٹکا کوائل',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 6,
    description: 'CDI UNIT (BLACK CASE)',
    urdu: 'سی ڈی آی یونٹ کالا',
    model: 'MB100',
    point: '3',
  },
  {
    _id: 7,
    description: 'CDI UNIT (BLACK CASE)',
    urdu: 'سی ڈی آی یونٹ کالا',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 8,
    description: 'CHIMTA BUSH',
    urdu: 'چمٹا بش',
    model: 'CD70CDI',
    point: '1',
  },
  {
    _id: 9,
    description: 'CHIMTA W/BUSH "NET RATE" 1700gm',
    urdu: 'چمٹا بم بش 1700 گرام - نیٹ ریٹ',
    model: 'CD70CDI',
    point: '10',
  },
  {
    _id: 10,
    description: 'CHIMTA W/BUSH "NET RATE" 2050gm',
    urdu: 'چمٹا بم بش 2050 گرام - نیٹ ریٹ',
    model: 'CD70CDI',
    point: '10',
  },
  {
    _id: 11,
    description: 'CLUTCH KATORA (IN DREAMZ BOX)',
    urdu: 'کلچ  کٹورا',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 12,
    description: 'CLUTCH KATORA (IN DREAMZ BOX)',
    urdu: 'کلچ  کٹورا',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 13,
    description: 'CLUTCH PLATE SET',
    urdu: 'کلچ پلیٹ',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 14,
    description: 'CLUTCH PLATE SET (3PCS/SET)',
    urdu: 'کلچ پلیٹ (3پیس/ سیٹ)',
    model: 'HD110',
    point: '3',
  },
  {
    _id: 15,
    description: 'CLUTCH KATORA (IN DREAMZ BOX)',
    urdu: 'کلچ  کٹورا',
    model: 'CD70CDI',
    point: '3',
  },
  {
    _id: 16,
    description: 'CLUTCH PLATE SET (GREEN)',
    urdu: 'کلچ پلیٹ (گرین)',
    model: 'CD70CDI EURO 2',
    point: '3',
  },
  {
    _id: 17,
    description: 'CONNECTING ROD KIT "HEAVY DUTY"',
    urdu: 'کنیٹنگ راڈ',
    model: 'JH90/STAR',
    point: '20',
  },
];

const Marketing = () => {
  const {activeClient} = useAppSelector(state => state.clients);

  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text
          style={{
            fontSize: 12,
            flex: 0.8,
          }}>
          {item.description}
        </Text>
        <Text
          style={{
            fontSize: 12,
            flex: 0.4,
          }}>
          {item.model}
        </Text>
        <Text
          style={{
            flex: 0.3,

            fontSize: 12,
          }}>
          {item.point}
        </Text>

        <Text
          style={{
            flex: 0.3,

            fontSize: 12,
          }}>
          {item.urdu}
        </Text>

        {/* <Text
          style={{
            fontSize: 8,
          }}>
          {item.urdu}
        </Text> */}
        {/* <Text
         >
          {item.model}
        </Text> */}
      </View>
    ),
    [],
  );
  const keyExtractor = useCallback((item: any) => item._id.toString(), []);
  return (
    <SafeAreaView style={globalStyles.container}>
      <BigSpacer />

      {activeClient?.name !== 'DTL' && (
        <Text style={styles.dashboardName}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          eleifend libero, ac gravida dui. Cras placerat magna ac lacus
          consequat, at luctus orci volutpat. Duis eu euismod ante. Vivamus
          aliquet orci vel vulputate laoreet. Ut consectetur risus ut dignissim
          pretium. Ut et vulputate mauris. Donec dapibus venenatis nisi a
          egestas. Curabitur tincidunt ex sed lacinia mollis.
        </Text>
      )}

      {activeClient?.name === 'DTL' && (
        <View
          style={{
            marginHorizontal: 12,
          }}>
          <Image
            source={require('../../../assets/images/dtl-banner.jpeg')}
            style={{
              width: '100%',
              maxHeight: '30%',
              resizeMode: 'cover',
            }}
          />
          <Spacer />
          <Text style={styles.aboutText}>About Us:</Text>
          <Text>
            DTL (Dynamic technology Leader) was established in 2013 with the aim
            to provide reliable and durable products to customers. Our wide
            range of product consists of Engine, Body and Electric Parts for
            Motorcycles. We have a vast dealership network which is spread all
            over Pakistan. DTL is committed to provide satisfaction to customers
            with high quality products and after sales services. With all
            support from customers, we share and aggregate experience to
            continuously improve and innovate Products and Services
          </Text>
          <BigSpacer />
          <View
            style={{
              height: '60%',
            }}>
            <FlatList
              data={tableData}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </View>
        </View>
      )}
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
  aboutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});
