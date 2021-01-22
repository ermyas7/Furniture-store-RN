import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, icons, SIZES, FONTS, images} from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginHorizontal: SIZES.padding}}
        onPress={() => onPress(item)}>
        <Text style={{color: COLORS.secondary, ...FONTS.body2}}>
          {item.name}
        </Text>
        {selectedTab.id === item.id ? (
          <View style={{alignItems: 'center', marginTop: SIZES.base}}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: COLORS.blue,
              }}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Home = () => {
  const [tabList, setTabList] = React.useState([
    {
      id: 0,
      name: 'Chair',
      title: 'chairs',
      productList: [
        {
          productId: 1,
          productName: 'Chair Green Colour',
          price: 10.0,
          image: images.greenChair,
        },
        {
          productId: 2,
          productName: 'Chair Peach Colour',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 3,
          productName: 'Chair White Colour',
          price: 10.0,
          image: images.whiteChair,
        },
      ],
    },
    {
      id: 1,
      name: 'Cupboard',
      title: 'cupboards',
      productList: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 2,
      name: 'Table',
      title: 'tables',
      productList: [
        {
          productId: 7,
          productName: 'Product 7',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 8,
          productName: 'Product 8',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 9,
          productName: 'Product 9',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Chair',
    title: 'chairs',
    productList: [
      {
        productId: 1,
        productName: 'Chair Green Colour',
        price: 10.0,
        image: images.greenChair,
      },
      {
        productId: 2,
        productName: 'Chair Peach Colour',
        price: 10.0,
        image: images.redChair,
      },
      {
        productId: 3,
        productName: 'Chair White Colour',
        price: 10.0,
        image: images.whiteChair,
      },
    ],
  });
  const renderHeader = () => {
    return (
      <View
        style={{paddingHorizontal: SIZES.padding, marginTop: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={{flex: 1}}>
            <Image
              source={icons.menu}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={{flex: 1, alignItems: 'flex-end'}}>
            <Image
              source={icons.cart}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderTitle = (title) => {
    return (
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
          Collection of
        </Text>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTitle(selectedTab.title)}
      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />
    </SafeAreaView>
  );
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
