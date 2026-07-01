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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(18),
  },

  /* HEADER */
  header: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  deliverTo: {
    color: "#777",
    fontSize: moderateScale(14),
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(3),
  },

  locationTitle: {
    fontSize: moderateScale(22),
    fontWeight: "700",
  },

  arrow: {
    marginLeft: moderateScale(5),
    fontSize: moderateScale(20),
    color: "#FF6B00",
  },

  addressText: {
    fontSize: moderateScale(15),
    marginTop: verticalScale(3),
    color: "#444",
  },

  cartButton: {
    width: scale(48),
    height: scale(48),
    backgroundColor: "#FFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  cartIcon: {
    fontSize: moderateScale(22),
  },

  /* CAROUSEL */
  carouselContainer: {
    paddingVertical: verticalScale(15),
  },

  bannerCard: {
    width: width * 0.9,
    height: verticalScale(155),
    marginRight: scale(12),
    borderRadius: moderateScale(18),
    overflow: "hidden",

    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  /* SEARCH */
  searchRow: {
    flexDirection: "row",
    marginVertical: verticalScale(18),
  },

  searchInput: {
    flex: 1,
    height: verticalScale(50),
    backgroundColor: "#F5F5F5",
    borderRadius: moderateScale(14),
    paddingHorizontal: moderateScale(15),
    fontSize: moderateScale(16),
  },

  filterButton: {
    width: scale(50),
    height: scale(50),
    backgroundColor: "#F5F5F5",
    marginLeft: scale(10),
    borderRadius: moderateScale(14),
    alignItems: "center",
    justifyContent: "center",
  },

  filterIcon: {
    fontSize: moderateScale(20),
  },

  /* CATEGORY GRID */
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryCard: {
    width: (width - scale(18) * 2 - 20) / 4,
    height: verticalScale(100),
    borderRadius: moderateScale(18),
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(14),

    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: moderateScale(5),
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  categoryIcon: {
    width: scale(42),
    height: scale(42),
  },

  categoryLabel: {
    marginTop: verticalScale(6),
    fontSize: moderateScale(13),
    fontWeight: "600",
  },

  /* SECTION HEADER */
  sectionHeader: {
    marginTop: verticalScale(10),
    paddingHorizontal: scale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    color: "#000",
  },

  viewAllText: {
    fontSize: moderateScale(16),
    color: "#FF6A00",
    fontWeight: "600",
  },

  /* OFFER GRID */
  offerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    marginTop: verticalScale(10),
  },

  offerCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(14),
    marginBottom: verticalScale(18),
    paddingBottom: verticalScale(12),

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,

    position: "relative",
  },

  offerImage: {
    width: "100%",
    height: verticalScale(130),
    borderTopLeftRadius: moderateScale(14),
    borderTopRightRadius: moderateScale(14),
  },

  offerContent: {
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(8),
  },

  offerTitle: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: "#333",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(4),
  },

  star: {
    fontSize: moderateScale(14),
  },

  rating: {
    marginLeft: moderateScale(4),
    color: "#444",
    fontSize: moderateScale(13),
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(4),
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#888",
    marginRight: moderateScale(6),
    fontSize: moderateScale(14),
  },

  newPrice: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "red",
  },

  heartButton: {
    position: "absolute",
    top: verticalScale(10),
    right: scale(10),
    backgroundColor: "#fff",
    padding: moderateScale(6),
    borderRadius: moderateScale(20),
    elevation: 3,
  },
});
