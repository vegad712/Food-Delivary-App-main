import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("6%"),
    paddingTop: hp("7%"),
  },

  backBtn: {
    position: "absolute",
    top: hp("3%"),
    left: wp("4%"),
    width: wp("10%"),
    height: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  backIcon: {
    width: wp("15%"),
    height: wp("15%"),
    tintColor: "#444",
  },

  title: {
    fontSize: wp("7%"),
    fontWeight: "700",
    textAlign: "center",
    marginTop: hp("4%"),
    color: "#000",
  },

  subtitle: {
    fontSize: wp("4%"),
    textAlign: "center",
    marginTop: hp("1.5%"),
    color: "#444",
    lineHeight: hp("3%"),
  },

  /* Fingerprint wrapper */
  fingerWrapper: {
    width: wp("60%"),
    height: hp("30%"),
    alignSelf: "center",
    marginTop: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },

  fingerBox: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },

  fingerIcon: {
    width: wp("28%"),
    height: wp("28%"),
    resizeMode: "contain",
  },

  scanOverlay: {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    borderRadius: wp("4%"),
    zIndex: 2,
  },

  gradient: {
    width: "100%",
    height: "100%",
  },

  successText: {
    color: "#00C853",
    textAlign: "center",
    fontSize: wp("4%"),
    marginTop: hp("2%"),
  },

  continueBtn: {
    marginTop: hp("6%"),
    width: wp("85%"),
    alignSelf: "center",
  },

  continueGradient: {
    paddingVertical: hp("2%"),
    borderRadius: wp("10%"),
  },

  continueText: {
    textAlign: "center",
    color: "#fff",
    fontSize: wp("4.8%"),
    fontWeight: "700",
  },

  skipText: {
    textAlign: "center",
    marginTop: hp("2%"),
    fontSize: wp("4%"),
    color: "#888",
  },
});
