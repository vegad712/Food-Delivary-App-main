import React, { useEffect, useState, useRef } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types/RootStackTypes';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { AppImages } from '../../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

export default function CategoryScreen({ route, navigation }: Props) {
  const { type } = route.params;

  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // FIXED → price is now a NUMBER not a string
  const products = [
    {
      id: 1,
      name: `${type} Special`,
      price: 12.99,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
    {
      id: 2,
      name: `${type} Deluxe`,
      price: 9.99,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
    {
      id: 3,
      name: `${type} Combo`,
      price: 15.49,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
    {
      id: 4,
      name: `${type} Large`,
      price: 11.49,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    },
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }, 1200);
  }, []);

  const ShimmerCard = () => (
    <View style={styles.shimmerCard}>
      <View style={styles.shimmerBox} />
      <View style={[styles.shimmerLine, { width: '70%' }]} />
      <View style={[styles.shimmerLine, { width: '40%' }]} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={{ fontSize: 22 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{type}</Text>

        {/* CART BUTTON FIXED */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={styles.cartIcon}
        >
          <Image source={AppImages.BASKET} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9e9e9e"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ fontSize: 18 }}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCT LIST */}
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4]}
          numColumns={2}
          keyExtractor={i => i.toString()}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={() => <ShimmerCard />}
        />
      ) : (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <FlatList
            data={filteredProducts}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              // MAIN CLICK → PRODUCT DETAIL
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    category: type, //  FIXED
                  })
                }
              >
                <TouchableOpacity
                  style={styles.favIconContainer}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Image source={AppImages.FAV} style={styles.favIcon} />
                </TouchableOpacity>

                <Image source={{ uri: item.image }} style={styles.img} />
                <Text style={styles.name} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
