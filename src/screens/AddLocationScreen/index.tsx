import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ Correct Safe Area
import { styles } from "./styles";
import { AppImages } from "../../utils";

const AddLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [locationName, setLocationName] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>   {/* ✅ Added SafeArea */}
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>Add New Location</Text>

          <View style={{ width: 20 }} />
        </View>

        {/* Map Area */}
        <View style={styles.mapContainer}>
          <Image source={AppImages.MAP} style={styles.mapImage} />
        </View>

        {/* Location Input */}
        <Text style={styles.label}>Location</Text>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="Your location"
            placeholderTextColor="#999"
            value={location}
            onChangeText={setLocation}
            style={styles.input}
          />
          <Image source={AppImages.LOC} style={styles.modelImage} />
        </View>

        {/* Location Name */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Location Name"
            placeholderTextColor="#999"
            value={locationName}
            onChangeText={setLocationName}
            style={styles.input}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.navigate("LocationSelectScreen")}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddLocationScreen;
