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

  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: moderateScale(16),
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(12),
  },

  backBtn: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: moderateScale(12),
    backgroundColor: "#eee",
    borderRadius: moderateScale(8),
  },

  backText: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#333",
  },

  header: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    textAlign: "center",
  },

  empty: {
    marginTop: verticalScale(40),
    textAlign: "center",
    fontSize: moderateScale(16),
    color: "#777",
  },

  card: {
    backgroundColor: "#fff",
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(12),

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    elevation: 3,
  },

  title: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    marginBottom: verticalScale(6),
  },

  txt: {
    fontSize: moderateScale(15),
    color: "#555",
    marginBottom: verticalScale(3),
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  scrollContent: {
    paddingBottom: verticalScale(30),
  },
mainWrapper: {
  flex: 1,
},

bottomButtons: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingVertical: 15,
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderColor: "#eee",
},

cancelBtn: {
  flex: 1,
  marginRight: 10,
  paddingVertical: 14,
  backgroundColor: "#ff4d4d",
  borderRadius: 10,
  alignItems: "center",
},

cancelText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

reviewBtn: {
  flex: 1,
  marginLeft: 10,
  paddingVertical: 14,
  backgroundColor: "#FF6C44",
  borderRadius: 10,
  alignItems: "center",
},

reviewText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

});
