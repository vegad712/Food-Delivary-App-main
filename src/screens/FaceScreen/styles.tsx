import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("7.5%"), // 30
    paddingTop: hp("7.5%"), // 60
  },

  backBtn: {
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    padding: wp("2.5%"),
  },

  backIcon: {
    width: wp("15%"), // 30
    height: wp("15%"), // 20
    tintColor: "#000",
    resizeMode: "contain",
  },

  title: {
    fontSize: wp("5.5%"), // 22
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp("2.5%"),
  },

  subtitle: {
    fontSize: wp("3.8%"), // 15
    color: "#7a7a7a",
    textAlign: "center",
    marginTop: hp("1.5%"),
    lineHeight: hp("2.5%"),
  },

  faceWrapper: {
    width: wp("65%"), // 250
    height: wp("65%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("5%"),
  },

  faceBox: {
    width: wp("65%"),
    height: wp("65%"),
    position: "absolute",
    resizeMode: "contain",
  },

  faceIcon: {
    width: wp("30%"), // 120
    height: wp("30%"),
    resizeMode: "contain",
  },

  scanOverlay: {
    position: "absolute",
    width: "100%",
    top: 0,
    overflow: "hidden",
    borderRadius: wp("5%"),
  },

  gradient: {
    width: "100%",
    height: "100%",
    opacity: 0.35,
  },

  successText: {
    color: "#1abc9c",
    textAlign: "center",
    marginTop: hp("1.5%"),
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  /* Continue Button */
  continueBtn: {
    marginTop: hp("5%"),
    alignSelf: "center",
    width: "100%",
  },

  continueGradient: {
    width: "100%",
    paddingVertical: hp("2%"),
    borderRadius: wp("8%"),
    alignItems: "center",
  },

  continueText: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "bold",
  },

  /* Skip */
  skipText: {
    color: "#999",
    textAlign: "center",
    marginTop: hp("2%"),
    fontSize: wp("4%"),
  },
});
