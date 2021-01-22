/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const ItemDetail = ({route}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding,
        }}>
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
              style={{width: 25, height: 25, tintColor: COLORS.white}}
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

  const renderProductTag = () => {
    const {itemInfo} = route.params;
    return (
      <>
        {/* product tag */}
        <View
          style={{
            position: 'absolute',
            top: '45%',
            left: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: COLORS.transparentLightGray1,
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: '43%',
            left: '30%',
            backgroundColor: COLORS.transparentLightGray1,
            width: '50%',
            flexDirection: 'row',
            padding: SIZES.radius * 1.5,
            borderRadius: 10,
          }}>
          <View style={{flex: 2}}>
            <Text style={{color: COLORS.darkGray, ...FONTS.h3}}>
              {itemInfo.productName}
            </Text>
          </View>
          <View style={{flex: 1.5, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text style={{color: COLORS.darkGreen, ...FONTS.h3}}>
              $ {itemInfo.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </>
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
          {renderProductTag()}
        </ImageBackground>
      );
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>{renderInfo()}</View>
  );
};

export default ItemDetail;
