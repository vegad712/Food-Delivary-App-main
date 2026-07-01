import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
const categoriesList = ["All", "Offers", "Orders", "System"];

const initialNotifications = [
  {
    id: "1",
    title: "Get 20% Discount Code",
    description: "Get discount codes from sharing with friends.",
    time: "12:20",
    date: "10/05/2024",
    category: "Offers",
    read: false,
  },
  {
    id: "2",
    title: "Order Received",
    description: "Your order has been delivered successfully.",
    time: "10:14",
    date: "10/05/2024",
    category: "Orders",
    read: true,
  },
  {
    id: "3",
    title: "System Update",
    description: "Your account security has been improved.",
    time: "08:55",
    date: "09/05/2024",
    category: "System",
    read: false,
  },
  {
    id: "4",
    title: "Order Cancelled",
    description: "Your order has been cancelled.",
    time: "07:22",
    date: "08/05/2024",
    category: "Orders",
    read: true,
  },
];

const NotificationScreen = ({ navigation }: any) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(initialNotifications);

  // 🔍 Filter Logic
  const filtered = notifications.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ? true : item.category === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.card,
        !item.read && styles.unreadCard, // highlight unread
      ]}
      onPress={() => {
        // mark as read
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === item.id
              ? {
                  ...n,
                  read: true,
                }
              : n
          )
        );
      }}
    >
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        {!item.read && <View style={styles.dot} />}
      </View>

      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.row}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.icon}>←</Text>   
     </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <Text style={styles.icon}>⚙</Text>
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
<Text style={styles.icon}>🔎︎</Text>  
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* CATEGORIES */}
      <View style={styles.categoryRow}>
        {categoriesList.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              activeCategory === cat && styles.activeCategory,
            ]}
            onPress={() => setActiveCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === cat && styles.activeCategoryText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
