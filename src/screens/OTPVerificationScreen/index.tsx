import { useRoute } from "@react-navigation/native";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { styles } from "./styles";
import { useAppNavigation } from "../../hooks";
import { SafeAreaView } from "react-native-safe-area-context";

const OTPVerificationScreen = () => {

  const navigation = useAppNavigation("ProfileScreen");
  const route = useRoute();

  const { phoneNumber } = route.params || {};

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isDisabled, setIsDisabled] = useState(true);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  // TIMER LOGIC
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // HANDLE CHANGE
  const handleChange = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // HANDLE BACKSPACE
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const resendOTP = () => {
    Alert.alert("OTP Sent", "A new OTP has been sent to your number.");

    setOtp(["", "", "", ""]);
    inputRefs[0].current?.focus();

    setIsDisabled(true);
    setTimer(60);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bbc}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>Code sent to {phoneNumber}</Text>

        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

        <Text style={{ textAlign: "center", marginTop: 15, fontWeight: "bold" }}>
          Didn't receive code?
        </Text>

        <TouchableOpacity onPress={resendOTP} disabled={isDisabled}>
          <Text
            style={{
              color: isDisabled ? "gray" : "blue",
              fontSize: 18,
              marginTop: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {isDisabled ? `Resend OTP (${timer}s)` : "Resend OTP"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.verifyBtn, { opacity: isOtpComplete ? 1 : 0.4 }]}
        disabled={!isOtpComplete}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backToSign}>Back to Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;
