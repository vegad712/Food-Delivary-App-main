import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 280,
    position: "relative",
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },

  mainImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
backIcon: {
      width: wp("15%"), // 30
      height: wp("15%"), // 20
      tintColor: "#000",
      resizeMode: "contain",
    },
  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 8,
    borderRadius: 30,
    elevation: 4,
  },

  productName: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
    marginHorizontal: 20,
    color: "#000",
  },

  priceMain: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 6,
    marginHorizontal: 20,
    color: "#FF4E00",
  },

  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 12,
  },

  reviewText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },

  reviewLink: {
    marginLeft: "auto",
    fontSize: 14,
    fontWeight: "600",
    color: "#FF4E00",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 22,
    marginHorizontal: 20,
    marginBottom: 10,
    color: "#000",
  },

  addOnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  addOnName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  addOnPrice: {
    fontSize: 15,
    fontWeight: "600",
    color: "#666",
    marginRight: 10,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    marginTop: 30,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  qtyBtn: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 8,
    color: "#000",
  },

  qtyNum: {
    fontSize: 18,
    marginHorizontal: 12,
    fontWeight: "600",
    color: "#333",
  },

  addBtn: {
    flex: 1,
    backgroundColor: "#FF4E00",
    marginLeft: 14,
    paddingVertical: 14,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  addBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
