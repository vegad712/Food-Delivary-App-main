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
  },

  /* HEADER */
  header: {
    height: hp(7),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    justifyContent: "space-between",
  },
  Istyle: {
    fontSize: RFValue(20),
  },
  backIcon: {
    width: wp(10),
    height: wp(10),
    tintColor: "#000",
  },
  dIcon: {
    width: wp(5),
    height: wp(5),
    tintColor: "#000",
  },
  headerTitle: {
    fontSize: RFValue(20),
    fontWeight: "700",
    color: "#000",
  },

  sectionTitle: {
    fontSize: RFValue(18),
    fontWeight: "700",
    marginBottom: hp(1),
    color: "#000",
  },

  emptyText: {
    textAlign: "center",
    marginTop: hp(3),
    fontSize: RFValue(16),
    color: "#777",
  },

  /* CART ITEMS */
  itemCard: {
    flexDirection: "row",
    padding: wp(4),
    borderRadius: wp(3),
    backgroundColor: "#fafafa",
    marginBottom: hp(2),
  },
  foodImg: {
    width: wp(18),
    height: wp(18),
    marginRight: wp(3),
    borderRadius: wp(3),
  },

  itemHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(0.5),
  },
  itemName: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(0.5),
  },
  oldPrice: {
    fontSize: RFValue(13),
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: wp(2),
  },
  newPrice: {
    fontSize: RFValue(15),
    fontWeight: "700",
    color: "#ff6b3b",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(1),
  },
  qtyBtn: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(2),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  qtyBtnText: {
    fontSize: RFValue(18),
    fontWeight: "700",
    color: "#333",
  },
  qtyNumber: {
    marginHorizontal: wp(3),
    fontSize: RFValue(16),
    fontWeight: "700",
    color: "#000",
  },

  addonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(0.5),
  },
  addonText: {
    fontSize: RFValue(13),
    color: "#555",
  },
  addonPrice: {
    fontSize: RFValue(13),
    fontWeight: "600",
    color: "#ff6b3b",
  },

  /* BLOCK CARDS */
  blockCard: {
    padding: wp(4),
    backgroundColor: "#f8f8f8",
    borderRadius: wp(3),
    marginBottom: hp(2),
  },
  blockRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  blockIcon: {
    width: wp(6),
    height: wp(6),
    tintColor: "#ff6b3b",
  },
  blockTitle: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: "#000",
  },
  blockDesc: {
    fontSize: RFValue(13),
    color: "#777",
    marginTop: hp(0.5),
  },

  /* PROMO BADGE */
  promoBadge: {
    flexDirection: "row",
    marginTop: hp(0.7),
    alignItems: "center",
  },
  promoText: {
    backgroundColor: "#ff6b3b",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(2),
    color: "#fff",
    fontSize: RFValue(12),
    marginRight: wp(2),
  },
  promoPercent: {
    fontSize: RFValue(14),
    fontWeight: "700",
    color: "#ff6b3b",
  },

  /* TOTAL SECTION */
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(1),
  },
  amountLabel: {
    fontSize: RFValue(15),
    color: "#444",
  },
  amountValue: {
    fontSize: RFValue(15),
    fontWeight: "600",
    color: "#000",
  },
  discountValue: {
    fontSize: RFValue(15),
    fontWeight: "600",
    color: "green",
  },

  totalLabel: {
    fontSize: RFValue(17),
    fontWeight: "700",
    color: "#000",
    marginTop: hp(1),
  },
  totalValue: {
    fontSize: RFValue(19),
    fontWeight: "700",
    color: "#ff6b3b",
    marginTop: hp(1),
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 0,
    height: hp(9),
    backgroundColor: "#fff",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5),
  },
  footerPrice: {
    fontSize: RFValue(20),
    fontWeight: "700",
    color: "#000",
  },
  orderBtn: {
    backgroundColor: "#ff6b3b",
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.2),
    borderRadius: wp(3),
  },
  orderBtnText: {
    fontSize: RFValue(16),
    color: "#fff",
    fontWeight: "700",
  },
});
