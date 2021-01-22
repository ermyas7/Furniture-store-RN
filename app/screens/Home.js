/* eslint-disable react-native/no-inline-styles */
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

const ScrollableCard = ({productList, navigation}) => {
  const renderCard = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginLeft: SIZES.padding}}
        onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
        <View style={{width: SIZES.width / 2}}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: SIZES.radius * 2,
            }}
          />
          <View
            style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
            <Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>
              Furniture
            </Text>
            <Text
              style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>
              {item.productName}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 30,
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: COLORS.transparentLightGray,
            }}>
            <Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={productList}
      renderItem={renderCard}
      keyExtractor={(item) => item.productId.toString()}
    />
  );
};

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
          <View
            style={{
              alignItems: 'center',
              marginTop: SIZES.base,
              marginBottom: SIZES.padding,
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
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const Home = ({navigation}) => {
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
  const renderPromotionCard = () => {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding / 2,
            paddingVertical: SIZES.radius,
            height: 110,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          },
        ]}>
        <View
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray2,
            borderRadius: 20,
            marginLeft: SIZES.padding / 2,
          }}>
          <Image
            source={images.sofa}
            resizeMode="contain"
            style={{width: '60%', height: '60%'}}
          />
        </View>
        {/* Wording section */}
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2}}>Special Offer</Text>
          <Text style={{...FONTS.body3}}>Adding to your cart</Text>
        </View>
        {/*  button */}
        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 60,
              borderRadius: 10,
            }}>
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{width: '50%', height: '50%'}}
            />
          </TouchableOpacity>
        </View>
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
      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>
      {/* footer promotion card */}
      <View style={{height: '19%', justifyContent: 'flex-end'}}>
        {renderPromotionCard()}
      </View>
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
