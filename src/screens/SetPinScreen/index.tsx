import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useAppNavigation } from "../../hooks";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { AppImages } from "../../utils";

const SetPinScreen = () => {
  const navigation = useAppNavigation();

  const [pin, setPin] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (text: string, index: number) => {
    let newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && pin[index] === "") {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isComplete = pin.every((digit) => digit !== "");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Image source={AppImages.BACK} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Titles */}
      <Text style={styles.title}>PIN Security</Text>
      <Text style={styles.subtitle}>Protect your account with a secure PIN</Text>

      {/* PIN Inputs */}
      <View style={styles.pinRow}>
        {pin.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.pinInput}
            maxLength={1}
            keyboardType="number-pad"
            value={value}
            onChangeText={(txt) => handleChange(txt, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueBtn, { opacity: isComplete ? 1 : 0.4 }]}
        disabled={!isComplete}
        onPress={() => navigation.replace("MainTabs")} // ⭐ FIXED
      >
        <LinearGradient
          colors={["#FF6347", "#FF826C"]}
          style={styles.continueGradient}
        >
          <Text style={styles.continueText}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Skip */}
      <TouchableOpacity onPress={() => navigation.replace("MainTabs")}> 
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SetPinScreen;
