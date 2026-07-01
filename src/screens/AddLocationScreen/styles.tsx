import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Responsive function
const wp = p => (width * p) / 100;
const hp = p => (height * p) / 100;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(1.5),
  },

  headerText: {
    fontSize: wp(5),
    fontWeight: "600",
  },

  mapContainer: {
    height: hp(25),
    borderRadius: wp(3),
    overflow: "hidden",
    marginBottom: hp(2),
  },

  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  label: {
    marginBottom: hp(0.8),
    fontWeight: "600",
    color: "#333",
    marginLeft: wp(1),
    fontSize: wp(4),
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: wp(3),
    paddingHorizontal: wp(3.5),
    paddingVertical: hp(1.5),
    marginBottom: hp(2),
  },

  input: {
    flex: 1,
    fontSize: wp(4),
    color: "#000",
  },

  icon: {
    fontSize: wp(7),
  },

  modelImage: {
    height: wp(6),
    width: wp(6),
  },

  saveBtn: {
    backgroundColor: "#FF6C44",
    paddingVertical: hp(2),
    borderRadius: wp(8),
    alignItems: "center",
    marginTop: hp(2),
  },

  saveText: {
    color: "#fff",
    fontSize: wp(4.2),
    fontWeight: "600",
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
