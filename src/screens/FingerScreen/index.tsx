import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import { AppImages } from "../../utils";
import { useAppNavigation } from "../../hooks";
import { SafeAreaView } from "react-native-safe-area-context";

const FingerScreen = () => {
  const [step, setStep] = useState<"default" | "scanning" | "done">("default");

  const scanningAnim = useRef(new Animated.Value(0)).current;
  const navigation = useAppNavigation();

  useEffect(() => {
    if (step === "scanning") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanningAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: false,
          }),
          Animated.timing(scanningAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
          }),
        ])
      ).start();
    }
  }, [scanningAnim, step]);

  const scanHeight = scanningAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["10%", "90%"],
  });

  return (
    <SafeAreaView style={styles.container}>

      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Image source={AppImages.BACK} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Fingerprint Security</Text>
      <Text style={styles.subtitle}>
        Secure your account using your{"\n"}fingerprint
      </Text>

      {/* Fingerprint Box */}
      <View style={styles.fingerWrapper}>
        <Image
          source={
            step === "done"
              ? AppImages.CORNER_GREEN
              : AppImages.CORNER_GREY
          }
          style={styles.fingerBox}
        />

        <Image
          source={step === "done" ? AppImages.FGREEN : AppImages.FGREY}
          style={styles.fingerIcon}
        />

        {step === "scanning" && (
          <Animated.View style={[styles.scanOverlay, { height: scanHeight }]}>
            <LinearGradient
              colors={["#FFCA28", "transparent"]}
              style={styles.gradient}
            />
          </Animated.View>
        )}
      </View>

      {step === "done" && (
        <Text style={styles.successText}>✓ Authentication successful</Text>
      )}

      {/* Continue */}
      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => {
          if (step === "default") {
            setStep("scanning");
          } else if (step === "scanning") {
            setStep("done");
          } else if (step === "done") {
            navigation.navigate("SetPinScreen");
          }
        }}
      >
        <LinearGradient
          colors={["#FF8C69", "#FF6B3C"]}
          style={styles.continueGradient}
        >
          <Text style={styles.continueText}>
            {step === "done" ? "Next" : "Continue"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* ✅ Skip → direct navigate */}
      <TouchableOpacity onPress={() => navigation.navigate("SetPinScreen")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default FingerScreen;
