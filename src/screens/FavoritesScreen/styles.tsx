import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
  },

  /* HEADER */
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(1.8),
  },

  header: {
    fontSize: RFValue(20),
    fontWeight: "700",
    color: "#000",
  },

  /* SEARCH BAR */
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.3),
    borderRadius: wp(3),
    marginBottom: hp(2),
  },

  searchInput: {
    marginLeft: wp(2),
    fontSize: RFValue(16),
    flex: 1,
    color: "#000",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* CARD */
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: wp(3),
    padding: wp(2.5),
    marginBottom: hp(2),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: wp(1.5),
  },

  foodImg: {
    width: "100%",
    height: hp(14),
    borderRadius: wp(2.5),
  },

  heartBtn: {
    position: "absolute",
    top: hp(1.2),
    right: wp(2),
    backgroundColor: "#fff",
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  foodName: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: "#000",
    marginTop: hp(1),
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(0.8),
  },

  oldPrice: {
    fontSize: RFValue(14),
    textDecorationLine: "line-through",
    color: "#777",
    marginRight: wp(1.5),
  },

  newPrice: {
    fontSize: RFValue(15),
    fontWeight: "700",
    color: "#ff6b3b",
  },

  icon: {
    fontSize: RFValue(30),
  },

  empty: {
    textAlign: "center",
    fontSize: RFValue(18),
    marginTop: hp(3),
    color: "#999",
    width: "100%",
  },
});
