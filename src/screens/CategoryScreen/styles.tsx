import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const CARD = wp(44); // ~2 cards per row

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  cartIcon: {
    paddingTop: hp(1.3),
    left: wp(24),
  },

  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    marginBottom: hp(1.2),
  },

  backBtn: {
    padding: wp(1.3),
    marginRight: wp(4),
  },

  headerTitle: {
    fontSize: RFValue(22),
    fontWeight: "700",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
    paddingHorizontal: wp(3),
  },

  searchContainer: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    borderRadius: wp(3),
    paddingLeft: wp(3),
  },

  searchInput: {
    height: hp(5.8),
    fontSize: RFValue(16),
  },

  filterBtn: {
    width: wp(12),
    height: wp(12),
    backgroundColor: "#f3f3f3",
    marginLeft: wp(3),
    borderRadius: wp(3),
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: CARD,
    backgroundColor: "#fff",
    padding: wp(3),
    borderRadius: wp(4),
    marginRight:hp(2),
    marginLeft:hp(1),
    
    margin: hp(2),
    
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: wp(2),
    shadowOffset: { width: 0, height: hp(0.5) },
    elevation: 4,
  },

  img: {
    width: "100%",
    height: hp(16),
    resizeMode: "contain",
    marginBottom: hp(1),
  },

  name: {
    fontSize: RFValue(15),
    fontWeight: "600",
    marginTop: hp(0.5),
  },

  price: {
    fontSize: RFValue(14),
    fontWeight: "700",
    color: "#FF6A00",
    marginTop: hp(0.6),
  },

  favIconContainer: {
    position: "absolute",
    top: hp(1),
    right: wp(2),
    zIndex: 10,
    backgroundColor: "#fff",
    padding: wp(1.3),
    borderRadius: wp(6),

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: wp(2),
    shadowOffset: { width: 0, height: hp(0.5) },
    elevation: 4,
  },

  shimmerCard: {
    width: CARD,
    height: hp(24),
    backgroundColor: "#eee",
    borderRadius: wp(4),
    marginBottom: hp(2),
  },

  shimmerBox: {
    height: hp(14),
    backgroundColor: "#ddd",
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },

  shimmerLine: {
    height: hp(1.2),
    backgroundColor: "#ddd",
    marginTop: hp(1),
    marginHorizontal: wp(3),
    borderRadius: wp(2),
  },
});
