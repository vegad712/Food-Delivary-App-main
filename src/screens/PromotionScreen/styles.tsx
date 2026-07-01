import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("7%"),
    paddingHorizontal: wp("5%"),
  },

  headerTitle: {
    fontSize: wp("5%"),
    fontWeight: "700",
  },

  /* PROMO CODE BOX */
  promoCodeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    padding: hp("1.8%"),
    borderRadius: wp("3.5%"),
    width: "90%",
    alignSelf: "center",
    marginTop: hp("2%"),
  },

  promoInput: {
    fontSize: wp("4%"),
    flex: 1,
  },

  applyText: {
    fontSize: wp("4%"),
    color: "#ff6b3b",
    fontWeight: "700",
  },

  /* SECTION TITLE */
  sectionTitle: {
    fontSize: wp("4%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
    fontWeight: "700",
  },

  /* OFFER ROW */
  offerRow: {
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: wp("3.5%"),
    width: "90%",
    alignSelf: "center",
    padding: hp("1.8%"),
    marginTop: hp("1.5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  offerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  offerTitle: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },

  /* MORE PROMO BUTTON */
  morePromoBtn: {
    width: "90%",
    alignSelf: "center",
    marginTop: hp("2.5%"),
    backgroundColor: "#FFE6E0",
    padding: hp("2%"),
    borderRadius: wp("3.5%"),
  },

  morePromoText: {
    color: "#ff6b3b",
    fontSize: wp("4%"),
    fontWeight: "700",
    textAlign: "center",
  },

  /* FOOTER */
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: hp("2%"),
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  applyBtn: {
    backgroundColor: "#ff6b3b",
    height: hp("6%"),
    borderRadius: hp("3%"),
    justifyContent: "center",
    alignItems: "center",
  },

  applyBtnText: {
    color: "#fff",
    fontSize: wp("4.3%"),
    fontWeight: "700",
  },
});
