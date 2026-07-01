import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { AppImages } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";
const LocationSelectScreen = ({ navigation }) => {
  const locations = [
    {
      id: 1,
      label: "Lover’s House",
      address: "110 Baker Street, London, United Kingdom",
      selected: true,
    },
    {
      id: 2,
      label: "Home",
      address: "221B Baker Street, London, United Kingdom",
      selected: false,
    },
    {
      id: 3,
      label: "Company",
      address: "1A Baker Street, London, United Kingdom",
      selected: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.icon}>←</Text>   
              </TouchableOpacity>
        <Text style={styles.headerText}>My Locations</Text>
        <View style={{ width: 20 }} />
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
                <Image source={AppImages.MAP} style={styles.mapImage} />
        
      </View>

      {/* Saved Locations */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {locations.map((item) => (
          <View key={item.id} style={styles.locationBox}>
            <View>
              <Text style={styles.locationLabel}>{item.label}</Text>
              <Text numberOfLines={1} style={styles.locationAddress}>
                {item.address}
              </Text>
            </View>

            <Ionicons
              name={item.selected ? "radio-button-on" : "radio-button-off"}
              size={24}
              color="#FF6C44"
            />
          </View>
        ))}

        {/* Add New Location */}
        <TouchableOpacity
          style={styles.addNewBtn}
          onPress={() => navigation.navigate("AddLocationScreen")}
        >
   <Image
              source={AppImages.LOC} // replace with your image
              style={styles.modelImage}
            />          <Text style={styles.addNewText}>Add New Location</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Apply */}
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LocationSelectScreen;
