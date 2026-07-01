import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import { useCart } from "../../context/CartContext";
import { AppImages } from "../../utils";
import { useOrders } from "../../context/OrderContext";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CartScreen({ navigation, route }) {
  const { removeFromCart, updateCart } = useCart();
  const { cart } = useCart();
  const { addOrder } = useOrders();
  const selectedPayment = route?.params?.payment || "Cash";

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 0;
  const discount = subtotal > 20 ? 6.3 : 0;
  const total = subtotal + deliveryFee - discount;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    const orderData = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      status: "Pending",
      items: cart,
      total,
    };

    addOrder(orderData);
    navigation.navigate("OrderScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={AppImages.BACK} style={styles.backIcon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Basket</Text>

          <View style={{ width: 28 }} />
        </View>

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Text style={styles.sectionTitle}>Order Summary</Text>

          {cart.length === 0 ? (
            <Text style={styles.emptyText}>Your basket is empty.</Text>
          ) : (
            cart.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImg}
                  resizeMode="contain"
                />

                <View style={{ flex: 1 }}>
                  <View style={styles.itemHeaderRow}>
                    <Text style={styles.itemName}>{item.name}</Text>

                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Image source={AppImages.CROSS} style={styles.dIcon} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.priceRow}>
                    <Text style={styles.oldPrice}>
                      ${(item.price + 4).toFixed(2)}
                    </Text>
                    <Text style={styles.newPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>

                  <View style={styles.qtyRow}>
                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() =>
                        updateCart(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyNumber}>{item.quantity}</Text>

                    <TouchableOpacity
                      style={styles.qtyBtn}
                      onPress={() =>
                        updateCart(item.id, item.quantity + 1)
                      }
                    >
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>

                  {item.addons?.map((addon) => (
                    <View key={addon.id} style={styles.addonRow}>
                      <Text style={styles.addonText}>{addon.name}</Text>
                      <Text style={styles.addonPrice}>
                        ${addon.price.toFixed(2)}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ))
          )}

          {/* ADDRESS */}
          <View style={styles.blockCard}>
            <View style={styles.blockRow}>
              <Text style={styles.Istyle}>🏠︎</Text>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity style={styles.blockTitle} onPress={()=>(navigation.navigate("LocationSelectScreen"))}><Text>Deliver to</Text></TouchableOpacity>
                <Text style={styles.blockDesc}>
                  221B Baker Street, London
                </Text>
              </View>
            </View>
          </View>

          {/* PAYMENT */}
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethod")}
            style={styles.blockCard}
          >
            <View style={styles.blockRow}>
              <Text style={styles.Istyle}>💴</Text>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.blockTitle}>Payment method</Text>
                <Text style={styles.blockDesc}>{selectedPayment}</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* PROMOTIONS */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Promotions")}
            style={styles.blockCard}
          >
            <View style={styles.blockRow}>
              <Text style={styles.Istyle}>📢</Text>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.blockTitle}>Promotions</Text>

                <View style={styles.promoBadge}>
                  <Text style={styles.promoText}>FREE SHIPPING</Text>
                  <Text style={styles.promoPercent}>20%</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* ORDER INSTRUCTIONS */}
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderScreen")}
            style={styles.blockCard}
          >
            <View style={styles.blockRow}>
              <Text style={styles.Istyle}>🛒</Text>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.blockTitle}>Order Instructions</Text>
                <Text style={styles.blockDesc}>
                  Add notes, preferences, or delivery instructions
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* TOTALS */}
          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Subtotal</Text>
            <Text style={styles.amountValue}>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Delivery Fee</Text>
            <Text style={styles.amountValue}>FREE</Text>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.amountLabel}>Discount</Text>
            <Text style={styles.discountValue}>- ${discount.toFixed(2)}</Text>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>

          <View style={{ height: 90 }} />
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerPrice}>${total.toFixed(2)}</Text>

          <TouchableOpacity style={styles.orderBtn} onPress={handlePlaceOrder}>
            <Text style={styles.orderBtnText}>Place Order</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}
