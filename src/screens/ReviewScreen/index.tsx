import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { AppImages } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";

const sampleItems = [
  {
    id: 1,
    title: "Chicken Burger",
    image:'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  },
  {
    id: 2,
    title: "Ramen Noodles",
    image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  },
  {
    id: 3,
    title: "Cherry Tomato Salad",
    image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  },
];

export default function ReviewScreen({ navigation }) {
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const updateRating = (itemId, value) => {
    setRatings({ ...ratings, [itemId]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.icon}>←</Text>   
                        </TouchableOpacity>

        <Text style={styles.header}>Rate Your Meal</Text>

        <Text style={styles.orderNumber}>SP 0023900</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {sampleItems.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Row */}
            <View style={styles.row}>
              <Image source={item.image} style={styles.foodImage} />

              <View style={{ flex: 1 }}>
                <Text style={styles.foodName}>{item.title}</Text>

                {/* Star Rating */}
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => updateRating(item.id, star)}
                    >
                      <Ionicons
                        name={
                          ratings[item.id] >= star
                            ? "star"
                            : "star-outline"
                        }
                        size={24}
                        color="#FFB800"
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* Review Input */}
            <TextInput
              placeholder="Type your review..."
              placeholderTextColor="#999"
              style={styles.input}
              multiline
              value={reviews[item.id]}
              onChangeText={(text) =>
                setReviews({ ...reviews, [item.id]: text })
              }
            />
          </View>
        ))}

        {/* Bottom Buttons */}
        <View style={styles.bottomBtns}>
          <TouchableOpacity
            style={styles.skipBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Thank You Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalCard}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={22} />
            </TouchableOpacity>

            <Image
              source={AppImages.HEART}
              style={styles.modalImage}
            />

            <Text style={styles.modalTitle}>Thanks for rating your meal</Text>

            <Text style={styles.modalMsg}>
              We appreciate your time and hope to serve you again soon!
            </Text>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
