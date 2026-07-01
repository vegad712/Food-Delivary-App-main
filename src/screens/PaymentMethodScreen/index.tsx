import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentMethodScreen({ navigation }) {
  const [selected, setSelected] = useState("Cash");

  const paymentOptions = [
    "Cash",
    "PayPal",
    "Google Pay",
    "Apple Pay",
    "Mastercard •••• 0895",
    "Visa •••• 2259",
  ];

  const handleSave = () => {
    navigation.navigate({
      name: "CartScreen",
      params: { payment: selected },
      merge: true, // ⬅️ This prevents creating a new screen
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.icon}>←</Text>   
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Payment Methods</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {paymentOptions.map((method) => (
          <TouchableOpacity
            key={method}
            style={styles.paymentRow}
            onPress={() => setSelected(method)}
          >
            <Text style={styles.paymentText}>{method}</Text>
                               <Text style={styles.icon}>› </Text>
           
          </TouchableOpacity>
        ))}

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* FOOTER BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.orderBtn} onPress={handleSave}>
          <Text style={styles.orderBtnText}>Apply</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
