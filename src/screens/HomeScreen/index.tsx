import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import BottomTab from '../../component/BottomTab';

const { width } = Dimensions.get('window');

/* -------------------------------- Categories -------------------------------- */
const categories = [
  {
    id: '1',
    label: 'Burger',
    icon: 'https://img.icons8.com/color/96/hamburger.png',
  },
  { id: '2', label: 'Taco', icon: 'https://img.icons8.com/color/96/taco.png' },
  {
    id: '3',
    label: 'Burrito',
    icon: 'https://img.icons8.com/color/96/burrito.png',
  },
  {
    id: '4',
    label: 'Drink',
    icon: 'https://img.icons8.com/color/96/cocktail.png',
  },
  {
    id: '5',
    label: 'Pizza',
    icon: 'https://img.icons8.com/color/96/pizza.png',
  },
  {
    id: '6',
    label: 'Donut',
    icon: 'https://img.icons8.com/color/96/doughnut.png',
  },
  {
    id: '7',
    label: 'Salad',
    icon: 'https://img.icons8.com/color/96/salad.png',
  },
  {
    id: '8',
    label: 'Noodles',
    icon: 'https://img.icons8.com/color/96/noodles.png',
  },
  {
    id: '9',
    label: 'Sandwich',
    icon: 'https://img.icons8.com/color/96/sandwich.png',
  },
  {
    id: '10',
    label: 'Pasta',
    icon: 'https://img.icons8.com/color/96/spaghetti.png',
  },
  {
    id: '11',
    label: 'Ice Cream',
    icon: 'https://img.icons8.com/color/96/ice-cream-cone.png',
  },
  { id: '12', label: 'More', icon: 'https://img.icons8.com/color/96/more.png' },
];

/* ---------------------------------- Banners --------------------------------- */
const banners = [
  {
    id: '1',
    image:
      'https://img.freepik.com/free-photo/top-view-salad-bowl-with-green-background_23-2148532560.jpg',
  },
  {
    id: '2',
    image:
      'https://img.freepik.com/free-photo/front-view-burgers-fries-dark-background_23-2148234995.jpg',
  },
];

/* --------------------------- SPECIAL OFFERS ITEMS --------------------------- */
const specialOffers = [
  {
    id: '1',
    name: 'Chicken Burger',
    rating: 4.9,
    oldPrice: '$10.00',
    price: '$6.00',
    image:
      'https://img.freepik.com/free-photo/front-view-tasty-cheeseburger-with-sesame-bun_23-2148234929.jpg',
  },
  {
    id: '2',
    name: 'Beef Burger',
    rating: 4.9,
    oldPrice: '$12.00',
    price: '$10.00',
    image:
      'https://img.freepik.com/free-photo/front-view-burger-with-meat-cheese-lettuce_23-2148234934.jpg',
  },
  {
    id: '3',
    name: 'Fish Burger',
    rating: 4.9,
    oldPrice: '$9.00',
    price: '$8.00',
    image:
      'https://img.freepik.com/free-photo/fish-burger-with-lettuce_140725-1043.jpg',
  },
  {
    id: '4',
    name: 'Turkey Burger',
    rating: 4.9,
    oldPrice: '$9.50',
    price: '$7.50',
    image:
      'https://img.freepik.com/free-photo/turkey-burger-with-veggies_140725-6134.jpg',
  },
  {
    id: '5',
    name: 'Lamb Burger',
    rating: 4.9,
    oldPrice: '$10.00',
    price: '$8.00',
    image:
      'https://img.freepik.com/free-photo/lamb-burger-table_140725-1047.jpg',
  },
  {
    id: '6',
    name: 'Smoked Meat Burger',
    rating: 4.9,
    oldPrice: '$12.00',
    price: '$9.00',
    image:
      'https://img.freepik.com/free-photo/smoked-burger-lettuce_140725-1048.jpg',
  },
  {
    id: '7',
    name: 'Veggie Burger',
    rating: 4.8,
    oldPrice: '$8.00',
    price: '$5.50',
    image:
      'https://img.freepik.com/free-photo/veggie-burger-bun_140725-1049.jpg',
  },
  {
    id: '8',
    name: 'BBQ Chicken Burger',
    rating: 4.9,
    oldPrice: '$11.00',
    price: '$7.50',
    image:
      'https://img.freepik.com/free-photo/bbq-chicken-burger_140725-1050.jpg',
  },
  {
    id: '9',
    name: 'Cheese Deluxe Burger',
    rating: 4.9,
    oldPrice: '$11.50',
    price: '$9.00',
    image:
      'https://img.freepik.com/free-photo/deluxe-burger-cheese_140725-1052.jpg',
  },
  {
    id: '10',
    name: 'Double Patty Burger',
    rating: 5.0,
    oldPrice: '$14.00',
    price: '$11.00',
    image:
      'https://img.freepik.com/free-photo/double-patty-burger_140725-1053.jpg',
  },
];

export default function HomeScreen({ navigation }) {
  const scaleAnim = useRef(categories.map(() => new Animated.Value(1))).current;

  const animatePress = (i: number) => {
    Animated.sequence([
      Animated.timing(scaleAnim[i], {
        toValue: 0.92,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim[i], {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.container, { paddingBottom: 120 }]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.deliverTo}>Deliver to</Text>
            <View style={styles.locationRow}>
              <TouchableOpacity
                style={styles.locationTitle}
                onPress={() => navigation.navigate('LocationSelectScreen')}
              >
                <Text style={styles.arrow}>Home</Text>
              </TouchableOpacity>
              <Text style={styles.arrow}>▼</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.cartButton} 
            onPress={() => navigation.navigate('CartScreen')}
          >
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.addressText}>221B Baker Street</Text>

        {/* BANNERS */}
        <FlatList
          data={banners}
          keyExtractor={it => it.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={width * 0.9}
          contentContainerStyle={styles.carouselContainer}
          renderItem={({ item }) => (
            <View style={styles.bannerCard}>
              <Image source={{ uri: item.image }} style={styles.bannerImage} />
            </View>
          )}
        />

        {/* SEARCH */}
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORY GRID */}
        <View style={styles.categoryGrid}>
          {categories.map((c, i) => (
            <Animated.View
              key={c.id}
              style={{ transform: [{ scale: scaleAnim[i] }] }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  animatePress(i);
                  navigation.navigate('Category', { type: c.label });
                }}
                style={styles.categoryCard}
              >
                <Image source={{ uri: c.icon }} style={styles.categoryIcon} />
                <Text numberOfLines={1} style={styles.categoryLabel}>
                  {c.label}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* SPECIAL OFFERS HEADER */}
        <View style={styles.offerGrid}>
          <Text style={styles.sectionTitle}>Special Offers</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All →</Text>
          </TouchableOpacity>

          {specialOffers.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.offerCard}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  oldPrice: item.oldPrice,
                  image: item.image,
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.offerImage} />

              <View style={styles.offerContent}>
                <Text style={styles.offerTitle}>{item.name}</Text>

                <View style={styles.ratingRow}>
                  <Text style={styles.star}>⭐</Text>
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                  <Text style={styles.newPrice}>{item.price}</Text>
                </View>
              </View>

              {/* Favorite Icon */}
              <TouchableOpacity style={styles.heartButton}>
                <Text style={{ fontSize: 18 }}>🤍</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* SPECIAL OFFERS LIST */}
        <FlatList
          data={specialOffers}
          keyExtractor={i => i.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.offerCard}>
              <Image source={{ uri: item.image }} style={styles.offerImage} />
              <Text style={styles.offerTitle}>{item.name}</Text>
              <Text style={styles.offerPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* BOTTOM TAB */}
    </SafeAreaView>
  );
}
