import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  /* HEADER */
  header: {
    backgroundColor: "#FF6B3C",
    paddingVertical: hp("3%"),
    paddingHorizontal: wp("4%"),
    borderBottomLeftRadius: wp("7%"),
    borderBottomRightRadius: wp("7%"),
    marginBottom: hp("2%"),
  },

  headerText: {
    fontSize: wp("6.2%"),
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: wp("7%"),
    marginTop: -hp("3%"),
    borderRadius: wp("5%"),
    paddingVertical: hp("2.5%"),
    paddingHorizontal: wp("4%"),
    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  title: {
    fontSize: wp("5%"),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: hp("1.8%"),
  },

  /* INPUT LABEL */
  inputLabel: {
    fontSize: wp("3.8%"),
    fontWeight: "500",
    color: "#333",
    marginTop: hp("1.8%"),
    marginBottom: hp("0.5%"),
    width: "85%",
    alignSelf: "center",
  },

  /* TEXT INPUT */
  inputBox: {
    width: "85%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#D7D7D7",
    borderRadius: wp("2.5%"),
    paddingHorizontal: wp("3.5%"),
    paddingVertical: hp("1.4%"),
    backgroundColor: "#FAFAFA",
    fontSize: wp("3.8%"),
    color: "#000",
  },

  /* 2 INPUTS ROW */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    marginTop: hp("1.8%"),
  },

  halfInput: {
    width: "47%",
  },

  /* CONTINUE BUTTON */
  continueBtn: {
    backgroundColor: "#FF6B3C",
    paddingVertical: hp("2%"),
    borderRadius: wp("5%"),
    marginTop: hp("3.5%"),
    width: "85%",
    alignSelf: "center",
  },

  continueText: {
    color: "#fff",
    fontSize: wp("4.4%"),
    textAlign: "center",
    fontWeight: "700",
  },

  skipText: {
    textAlign: "center",
    marginTop: hp("1.5%"),
    fontSize: wp("3.8%"),
    color: "#777",
  },

  /* PROFILE HEADER */
  profileHeader: {
    alignItems: "center",
    marginVertical: hp("2.5%"),
  },

  profilePhotoWrapper: {
    width: wp("26%"),
    height: wp("26%"),
    borderRadius: wp("13%"),
    backgroundColor: "#EDEDED",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  profilePhoto: {
    width: "100%",
    height: "100%",
    borderRadius: wp("13%"),
  },

  backIcon: {
    width: wp("7%"),
    height: wp("7%"),
    tintColor: "#000",
    resizeMode: "contain",
  },

  /* EDIT ICON */
  editIconWrapper: {
    position: "absolute",
    bottom: hp("0.5%"),
    right: hp("0.5%"),
    width: wp("8%"),
    height: wp("8%"),
    borderRadius: wp("4%"),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  editIcon: {
    width: wp("4%"),
    height: wp("4%"),
    tintColor: "#000",
  },

  /* DROPDOWN */
  dropdownWrapper: {
    width: "85%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: wp("2.5%"),
    backgroundColor: "#F9F9F9",
    marginTop: hp("1.2%"),
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.1%"),
  },
});
