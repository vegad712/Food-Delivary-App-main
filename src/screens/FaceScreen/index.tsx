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
const FaceScreen = () => {
  const navigation = useAppNavigation();

  const [step, setStep] = useState<"default" | "scanning" | "done">("default");

  const scanningAnim = useRef(new Animated.Value(0)).current;

  /* ---------------------------------------------------
    SCANNING ANIMATION
  --------------------------------------------------- */
  useEffect(() => {
    if (step === "scanning") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanningAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: false,
          }),
          Animated.timing(scanningAnim, {
            toValue: 0,
            duration: 700,
            useNativeDriver: false,
          }),
        ])
      ).start();

      // finish scan
      setTimeout(() => setStep("done"), 2000);
    }
  }, [step]);

  const scanHeight = scanningAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["10%", "90%"],
  });

  /* ---------------------------------------------------
     START SCAN (NO CAMERA)
  --------------------------------------------------- */
  const startFaceScan = () => {
    setStep("scanning");  // 🔥 directly start scan
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Back */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Image source={AppImages.BACK} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Face ID Security</Text>
      <Text style={styles.subtitle}>
        Secure your account with your face{"\n"}using Face ID
      </Text>

      {/* FACE BOX */}
      <View style={styles.faceWrapper}>
        <Image
          source={step === "done" ? AppImages.CORNER_GREEN : AppImages.CORNER_GREY}
          style={styles.faceBox}
        />

        <Image
          source={step === "done" ? AppImages.FACEGREEN : AppImages.FACEYELLOW}
          style={styles.faceIcon}
        />

        {/* scanning bar */}
        {step === "scanning" && (
          <Animated.View style={[styles.scanOverlay, { height: scanHeight }]}>
            <LinearGradient
              colors={["#FFCA28", "transparent"]}
              style={styles.gradient}
            />
          </Animated.View>
        )}
      </View>

      {/* success */}
      {step === "done" && (
        <Text style={styles.successText}>✓ Authentication successful</Text>
      )}

      {/* Continue / Next */}
      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => {
          if (step === "default") startFaceScan();
          else if (step === "done") navigation.navigate("FingerScreen");
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

      <TouchableOpacity onPress={() => navigation.navigate("FingerScreen")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default FaceScreen;
