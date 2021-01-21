import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

const Home = () => {
  const renderHeader = () => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => console.log('pressed')} style={{flex: 1}}>
            <Image source={icons.menu} style={{width: 25,height: 25}} resizeMode="contain"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('pressed')} style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={icons.cart} style={{width: 25,height: 25}} resizeMode="contain"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
export default Home;
