import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp("5%"),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2%"),
    gap: wp("3%"),
  },

  headerTitle: {
    fontSize: wp("5%"),
    fontWeight: "600",
    color: "#000",
  },

  listContainer: {
    marginTop: hp("1%"),
  },

  reasonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1.5%"),
    backgroundColor: "#F8F8F8",
    borderRadius: wp("3%"),
    marginBottom: hp("1.5%"),
    paddingHorizontal: wp("4%"),
  },

  radioOuter: {
    width: wp("5%"),
    height: wp("5%"),
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("3%"),
  },

  radioOuterActive: {
    borderColor: "#FF6A3D",
  },

  radioInner: {
    width: wp("2.5%"),
    height: wp("2.5%"),
    backgroundColor: "#FF6A3D",
    borderRadius: 50,
  },

  reasonText: {
    fontSize: wp("4%"),
    color: "#333",
  },

  inputBox: {
    backgroundColor: "#F0F0F0",
    borderRadius: wp("3%"),
    padding: wp("4%"),
    minHeight: hp("10%"),
    marginTop: -5,
    marginBottom: hp("2%"),
  },

  submitBtn: {
    backgroundColor: "#FF6A3D",
    paddingVertical: hp("2%"),
    borderRadius: wp("8%"),
    alignItems: "center",
    position: "absolute",
    bottom: hp("3%"),
    left: wp("5%"),
    right: wp("5%"),
  },

  submitText: {
    color: "#fff",
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    padding: wp("5%"),
    borderRadius: wp("4%"),
    alignItems: "center",
  },

  closeBtn: {
    position: "absolute",
    right: wp("3%"),
    top: wp("3%"),
  },

  modalTitle: {
    marginTop: hp("1%"),
    fontSize: wp("4.5%"),
    fontWeight: "700",
    color: "#000",
  },

  modalImage: {
    width: wp("25%"),
    height: wp("25%"),
    marginVertical: hp("2%"),
    resizeMode: "contain",
  },

  modalMessage: {
    textAlign: "center",
    color: "#444",
    fontSize: wp("3.5%"),
    marginBottom: hp("2%"),
  },

  icon: {
    fontSize: wp("7%"),
  },

  okBtn: {
    backgroundColor: "#FF6A3D",
    width: "100%",
    paddingVertical: hp("1.8%"),
    borderRadius: wp("8%"),
    alignItems: "center",
  },

  okText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: wp("4%"),
  },
});
