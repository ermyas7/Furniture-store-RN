/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

const ItemDetail = ({route}) => {
  const renderHeader = () => {
    return (
      <View
        style={{marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{width: 25, height: 25, tinyColor: COLORS.white}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{width: 25, height: 25, tinyColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderInfo = () => {
    const {itemInfo} = route.params;
    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}>
          {renderHeader()}
        </ImageBackground>
      );
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>{renderInfo()}</View>
  );
};

export default ItemDetail;
