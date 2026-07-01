import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: hp("6%"),
  },

  backBtn: {
    position: "absolute",
    top: hp("4%"),
    left: wp("5%"),
    padding: wp("2%"),
    zIndex: 10,
  },

  backIcon: {
    width: wp("15%"),
    height: wp("15%"),
    resizeMode: "contain",
  },

  title: {
    marginTop: hp("3%"),
    fontSize: wp("7%"),
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: wp("4%"),
    color: "#888",
    marginTop: hp("1%"),
    textAlign: "center",
    lineHeight: hp("2.5%"),
  },

  /** PIN INPUT ROW **/
  pinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("70%"),
    marginTop: hp("4%"),
  },

  pinInput: {
    width: wp("13%"),
    height: wp("13%"),
    borderRadius: wp("3%"),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#F7F7F7",
    textAlign: "center",
    fontSize: wp("6%"),
    fontWeight: "bold",
    color: "#000",
  },

  /** Continue Button **/
  continueBtn: {
    width: wp("80%"),
    borderRadius: wp("8%"),
    marginTop: hp("6%"),
    overflow: "hidden",
  },

  continueGradient: {
    paddingVertical: hp("2%"),
    borderRadius: wp("8%"),
  },

  continueText: {
    textAlign: "center",
    fontSize: wp("4.8%"),
    fontWeight: "700",
    color: "#fff",
  },

  /** Skip **/
  skipText: {
    marginTop: hp("2%"),
    fontSize: wp("4%"),
    color: "#888",
    textAlign: "center",
  },
});
