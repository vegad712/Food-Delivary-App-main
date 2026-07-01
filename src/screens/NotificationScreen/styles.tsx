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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(45),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(18),
  },

  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
  },

  icon: {
    fontSize: moderateScale(30),
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F4",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    height: verticalScale(45),
    marginBottom: verticalScale(15),
  },

  searchInput: {
    marginLeft: moderateScale(10),
    fontSize: moderateScale(15),
    flex: 1,
    color: "black",
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(15),
  },

  categoryButton: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: moderateScale(14),
    borderRadius: moderateScale(20),
    backgroundColor: "#F4F4F4",
  },

  activeCategory: {
    backgroundColor: "#FF6C44",
  },

  categoryText: {
    color: "#444",
    fontSize: moderateScale(14),
  },

  activeCategoryText: {
    color: "#FFF",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#EEE",
  },

  unreadCard: {
    backgroundColor: "#FFF4ED",
    borderColor: "#FFC8A8",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#000",
  },

  description: {
    fontSize: moderateScale(13),
    color: "#666",
    marginTop: verticalScale(4),
    marginBottom: verticalScale(6),
  },

  time: {
    fontSize: moderateScale(12),
    color: "#666",
  },

  date: {
    fontSize: moderateScale(12),
    color: "#999",
  },

  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(50),
    backgroundColor: "red",
  },
});
