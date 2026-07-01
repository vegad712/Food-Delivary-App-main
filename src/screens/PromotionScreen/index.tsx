import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const PromotionsScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const shippingOffers = [
    { id: 1, title: "FREE SHIPPING", desc: "No shipping fee" },
    { id: 2, title: "20% OFF", desc: "Shipping discount" },
  ];

  const orderOffers = [
    { id: 3, title: "20% OFF", desc: "Order discount" },
    { id: 4, title: "10% OFF", desc: "Limited time offer" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Promotions</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 20 }}>
        {/* Promo Code */}
        <View style={styles.promoCodeBox}>
          <TextInput
            placeholder="Promo Code"
            style={styles.promoInput}
          />
          <TouchableOpacity>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* Shipping */}
        <Text style={styles.sectionTitle}>Shipping Offers</Text>
        {shippingOffers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={styles.offerRow}
            onPress={() => setSelected(offer.id)}
          >
            <View style={styles.offerLeft}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
            </View>
            <Icon
              name={selected === offer.id ? "check-circle" : "circle"}
              size={22}
              color={selected === offer.id ? "#ff6b3b" : "#ccc"}
            />
          </TouchableOpacity>
        ))}

        {/* Order */}
        <Text style={styles.sectionTitle}>Order Offers</Text>
        {orderOffers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={styles.offerRow}
            onPress={() => setSelected(offer.id)}
          >
            <View style={styles.offerLeft}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
            </View>
            <Icon
              name={selected === offer.id ? "check-circle" : "circle"}
              size={22}
              color={selected === offer.id ? "#ff6b3b" : "#ccc"}
            />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.morePromoBtn}>
          <Text style={styles.morePromoText}>+ Get More Promotions</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* APPLY BUTTON */}
      <TouchableOpacity
  style={styles.applyBtn}
  onPress={() => {
    navigation.navigate({
      name: "Cart",
      params: { promoId: selected },
      merge: true,
    });
    navigation.goBack();
  }}
>
  <Text style={styles.applyBtnText}>Apply</Text>
</TouchableOpacity>

    </SafeAreaView>
  );
};

export default PromotionsScreen;
