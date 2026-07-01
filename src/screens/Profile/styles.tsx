import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// --- RESPONSIVE SCALE HELPERS ---
const guidelineBaseWidth = 375;    
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: moderateScale(20),
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },

  headerTitle: {
    fontSize: moderateScale(22),
    fontWeight: "700",
  },

  userCard: {
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
    elevation: 3,
  },

  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    marginRight: moderateScale(15),
  },

  username: {
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  subText: {
    color: "#777",
    marginTop: verticalScale(2),
    fontSize: moderateScale(14),
  },

  editButton: {
    backgroundColor: "#FF6B3B",
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    position: "absolute",
    right: moderateScale(20),
    top: moderateScale(20),
  },

  logoutRow: {
    backgroundColor: "#FFE8E0",
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(14),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(15),
  },

  logoutText: {
    color: "#FF6B3B",
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginLeft: moderateScale(10),
  },

  listCard: {
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(16),
    elevation: 2,
    marginBottom: verticalScale(50),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(14),
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  rowText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
  },

  languageBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
    alignItems: "center",
  },

  footerText: {
    fontSize: moderateScale(14),
    color: "#777",
    marginTop: verticalScale(12),
  },

  icon: {
    fontSize: moderateScale(30),
  },
});
