import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// --- RESPONSIVE SCALE HELPERS ---
const guidelineBaseWidth = 375;    
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#000",
  },

  paymentRow: {
    backgroundColor: "#fff",
    paddingVertical: verticalScale(15),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(12),

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  paymentText: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#333",
  },

  footer: {
    padding: moderateScale(20),
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },

  orderBtn: {
    backgroundColor: "#ff6b3b",
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
  },
  icon:{
    fontSize:30
  },

  orderBtnText: {
    color: "#fff",
    fontSize: moderateScale(17),
    fontWeight: "700",
  },
});
