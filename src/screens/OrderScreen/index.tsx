import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useOrders } from "../../context/OrderContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderScreen() {
  const { orders } = useOrders();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainWrapper}>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerRow}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CartScreen")}
                style={styles.backBtn}
              >
                <Text style={styles.backText}>← Back</Text>
              </TouchableOpacity>

              <Text style={styles.header}>My Orders</Text>

              <View style={{ width: 60 }} />
            </View>

            {/* No Orders */}
            {!orders || orders.length === 0 ? (
              <Text style={styles.empty}>No orders yet</Text>
            ) : (
              orders.map((item, index) => {
                if (!item) return null;

                const firstItem = item.items?.[0];

                return (
                  <View key={index} style={styles.card}>
                    <Text style={styles.title}>Order #{item.id}</Text>

                    <Text style={styles.txt}>
                      Date: {item.date || "No date"}
                    </Text>

                    <Text style={styles.txt}>
                      Status: {item.status || "Pending"}
                    </Text>

                    <Text style={styles.txt}>
                      Total: ₹{item.total?.toFixed(2) || "0.00"}
                    </Text>

                    <Text style={styles.txt}>
                      Items Count: {item.items?.length || 0}
                    </Text>

                    <Text style={styles.txt}>
                      First Item: {firstItem?.title || "N/A"}
                    </Text>

                    <Text style={styles.txt}>
                      Qty: {firstItem?.quantity || 0}
                    </Text>
                  </View>
                );
              })
            )}
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.cancelBtn}   onPress={()=>(navigation.navigate("CancleOrderScreen"))}>
            <Text style={styles.cancelText}>Cancel Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reviewBtn} onPress={()=>(navigation.navigate("ReviewScreen"))}>
            <Text style={styles.reviewText}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
