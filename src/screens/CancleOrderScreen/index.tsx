import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppImages } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";
const reasonsList = [
  "Change of mind",
  "Found better price elsewhere",
  "Delivery delay",
  "Incorrect item selected",
  "Duplicate order",
  "Unable to fulfill order",
  "Other reasons",
];

const CancelOrderScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [otherText, setOtherText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (!selectedReason) return;

    setShowModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.icon}>←</Text>   
                </TouchableOpacity>
        <Text style={styles.headerTitle}>Cancel Order</Text>
      </View>

      {/* Reasons List */}
      <View style={styles.listContainer}>
        {reasonsList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.reasonRow}
            onPress={() => setSelectedReason(item)}
          >
            <View
              style={[
                styles.radioOuter,
                selectedReason === item && styles.radioOuterActive,
              ]}
            >
              {selectedReason === item && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.reasonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Other reason input box */}
        {selectedReason === "Other reasons" && (
          <TextInput
            placeholder="Other reason ..."
            style={styles.inputBox}
            multiline
            value={otherText}
            onChangeText={setOtherText}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowModal(false)}
            >
              <Ionicons name="close" size={22} color="#555" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Your Order Canceled</Text>

            <Image
              source={AppImages.HEART} // replace with your image
              style={styles.modalImage}
            />

            <Text style={styles.modalMessage}>
              We're sorry to see your order go. 😔{"\n"}
              We're always striving to improve, and we{"\n"}
              hope to serve you better next time!
            </Text>

            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => {
                setShowModal(false);
                navigation.goBack();
              }}
            >
              <Text style={styles.okText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CancelOrderScreen;
