import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types/RootStackTypes";
import { useCart } from "../../context/CartContext";
import styles from "./styles";
import { AppImages } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetail">;

// ALL CATEGORY ADD-ONS
const AddOnsByCategory: any = {
  Burger: [
    { id: "cheese", name: "Add Cheese", price: 0.5 },
    { id: "bacon", name: "Add Bacon", price: 1 },
    { id: "meat", name: "Add Extra Meat", price: 2 },
  ],

  Taco: [
    { id: "guac", name: "Guacamole", price: 1 },
    { id: "salsa", name: "Extra Salsa", price: 0.5 },
  ],

  Pizza: [
    { id: "olives", name: "Olives", price: 0.5 },
    { id: "cheese2", name: "Double Cheese", price: 1 },
    { id: "jalapeno", name: "Jalapeño", price: 0.75 },
  ],

  "Ice Cream": [
    { id: "chocolate", name: "Extra Chocolate", price: 0.75 },
    { id: "sprinkles", name: "Sprinkles", price: 0.3 },
    { id: "cone", name: "Waffle Cone", price: 1 },
  ],
};

export default function ProductDetailScreen({ route, navigation }: Props) {
  const { id, name, price, image, category } = route.params;

  const numericPrice =
    typeof price === "string" ? parseFloat(price.replace("$", "")) : price;

  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const addOns = AddOnsByCategory[category] || [];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedAddOnObjects = useMemo(
    () => addOns.filter((a: any) => selectedAddOns.includes(a.id)),
    [selectedAddOns]
  );

  const totalPrice = useMemo(() => {
    const addOnPrice = selectedAddOnObjects.reduce((sum, a) => sum + a.price, 0);
    return (numericPrice + addOnPrice) * qty;
  }, [qty, selectedAddOnObjects]);

  // ✅ FIXED — Correct function
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: numericPrice,
      image,
      quantity: qty,
      addons: selectedAddOnObjects,
    });

    navigation.navigate("CartScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.mainImage} />

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
            <Image source={AppImages.BACK} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.priceMain}>${numericPrice.toFixed(2)}</Text>

        {/* ⭐ REVIEWS SECTION */}
        <View style={styles.reviewRow}>
          <Text>⭐</Text>
          <Text style={styles.reviewText}>4.7 (324 reviews)</Text>
          <TouchableOpacity >
            <Text style={styles.reviewLink}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Add-ons */}
        <Text style={styles.sectionTitle}>Additional Options</Text>

        {addOns.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={styles.addOnRow}
            onPress={() => toggleAddOn(item.id)}
          >
            <Text style={styles.addOnName}>{item.name}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.addOnPrice}>+ ${item.price.toFixed(2)}</Text>

              <Icon
                name={
                  selectedAddOns.includes(item.id)
                    ? "checkbox"
                    : "square-outline"
                }
                size={22}
                color={selectedAddOns.includes(item.id) ? "#FF4E00" : "#aaa"}
              />
            </View>
          </TouchableOpacity>
        ))}

        {/* Quantity + Add */}
        <View style={styles.footer}>
          <View style={styles.qtyBox}>
            <TouchableOpacity onPress={() => qty > 1 && setQty(qty - 1)}>
              <Text style={styles.qtyBtn}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNum}>{qty}</Text>

            <TouchableOpacity onPress={() => setQty(qty + 1)}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
            <Text style={styles.addBtnText}>
              Add • ${totalPrice.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
