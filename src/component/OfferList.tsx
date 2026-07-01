import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const offerItems = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '₹120',
    image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    description:
      'Fresh vegetables with feta cheese and extra virgin olive oil.',
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    price: '₹180',
    image: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
    description:
      'Soft paneer marinated with yogurt and spices grilled to perfection.',
  },
  {
    id: 3,
    name: 'Chicken Biryani',
    price: '₹250',
    image: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
    description: 'Aromatic basmati rice cooked with tender chicken and spices.',
  },
  {
    id: 4,
    name: 'Veg Burger',
    price: '₹90',
    image: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    description: 'Crispy veg patty with fresh veggies and sauces.',
  },
  {
    id: 5,
    name: 'Pasta Alfredo',
    price: '₹160',
    image: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
    description: 'Creamy Alfredo pasta with rich cheese and herbs.',
  },
  {
    id: 6,
    name: 'Veg Pizza',
    price: '₹220',
    image: 'https://www.themealdb.com/images/media/meals/xwpwxx1511784283.jpg',
    description: 'Loaded veggie pizza with mozzarella cheese.',
  },
  {
    id: 7,
    name: 'Chicken Shawarma',
    price: '₹140',
    image: 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
    description: 'Juicy grilled chicken wrapped with veggies & sauces.',
  },
  {
    id: 8,
    name: 'French Fries',
    price: '₹60',
    image: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
    description: 'Crispy golden fries with special masala.',
  },
];

const OfferList = () => {
  const navigation = useNavigation();

  const handlePress = (item: any) => {
    navigation.navigate('ProductDetailScreen', { product: item });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.sectionTitle}>Special Offers</Text>

      <FlatList
        data={offerItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OfferList;
