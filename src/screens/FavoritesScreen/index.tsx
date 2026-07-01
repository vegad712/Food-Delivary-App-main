import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { AppImages } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";
// USD → INR converter
const convertToINR = (usd: number) => Math.round(usd);

interface FavoriteItem {
  id: number;
  title: string;
  price: number;      // USD
  oldPrice?: number;  // USD
  image: string;
}

export default function FavoritesScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: 1,
      title: "Chicken Burger",
      price: 6.0, // USD
      oldPrice: 11.0,
      image:
        "https://assets-global.website-files.com/5f6cff2c8a92d42ab861814f/646478590113cc916c7cc199_Chicken%20Burger.jpg",
    },
    {
      id: 2,
      title: "Beef Burger",
      price: 12.0,
      oldPrice: 20.0,
      image:
        "https://assets.epicurious.com/photos/57c5b4cf082060f11022f7a5/1:1/w_1920,c_limit/cheese-burger.jpg",
    },
    {
      id: 3,
      title: "Fish Burger",
      price: 8.0,
      oldPrice: 14.0,
      image:
        "https://img.freepik.com/free-photo/fish-burger_1339-709.jpg",
    },
    {
      id: 4,
      title: "Turkey Burger",
      price: 7.5,
      oldPrice: 12.0,
      image:
        "https://img.freepik.com/free-photo/turkey-burger_1232-3345.jpg",
    },
  ]);

  // 🔍 Filter search
  const filtered = favorites.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // ❤️ Remove from favorites
  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 70 }}
    >
      <SafeAreaView>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Liked</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <Text style={styles.icon}>🔎</Text>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#777"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* GRID ITEMS */}
      <View style={styles.grid}>
        {filtered.length === 0 ? (
          <Text style={styles.empty}>Not Found</Text>
        ) : (
          filtered.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.foodImg} />

              <TouchableOpacity
                style={styles.heartBtn}
                onPress={() => removeFromFavorites(item.id)}
              >
                <Image source={AppImages.FAV} style={styles.favIcon} />
              </TouchableOpacity>

              <Text style={styles.foodName}>{item.title}</Text>

              {/* ✔ Price USD → INR */}
              <View style={styles.priceRow}>
                {item.oldPrice && (
                  <Text style={styles.oldPrice}>
                    ${convertToINR(item.oldPrice)}
                  </Text>
                )}
                <Text style={styles.newPrice}>
                  ${convertToINR(item.price)}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}
