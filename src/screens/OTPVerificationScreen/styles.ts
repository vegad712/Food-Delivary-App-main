import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("5%"),
    justifyContent: "center",
  },

  title: {
    fontSize: wp("8%"),
    fontWeight: "bold",
    color: "#f27a55",
    marginBottom: hp("1%"),
    textAlign: "center",
  },

  subtitle: {
    fontSize: wp("3.5%"),
    textAlign: "center",
    color: "#888",
    marginBottom: hp("4%"),
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp("5%"),
    marginBottom: hp("3%"),
  },

  otpBox: {
    width: wp("15%"),
    height: wp("15%"),
    borderWidth: 1,
    borderColor: "#E9EAEB",
    borderRadius: wp("2%"),
    textAlign: "center",
    fontSize: wp("6%"),
    backgroundColor: "#D3D3D3",
    fontWeight: "600",
  },

  bbc: {
    position: "absolute",
    top: hp("12%"),
    left: 0,
    right: 0,
  },

  verifyBtn: {
    backgroundColor: "#f27a55",
    paddingVertical: hp("1.8%"),
    borderRadius: wp("10%"),
    position: "absolute",
    bottom: hp("15%"),
    left: wp("5%"),
    right: wp("5%"),
  },

  verifyText: {
    color: "#fff",
    fontSize: wp("5%"),
    textAlign: "center",
  },

  backToSign: {
    textAlign: "center",
    color: "#f27a55",
    fontSize: wp("4.5%"),
    fontWeight: "500",
    position: "static",
    bottom: hp("4%"),
    width: "100%",
  },
});
