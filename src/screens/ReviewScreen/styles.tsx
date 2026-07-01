import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  header: {
    fontSize: 18,
    fontWeight: "600",
  },

  orderNumber: {
    fontSize: 14,
    color: "#555",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#eee",
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    marginBottom: 10,
  },

  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "600",
  },

  starsRow: {
    flexDirection: "row",
    marginTop: 6,
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    minHeight: 60,
    color: "#000",
  },

  bottomBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 20,
  },

  skipBtn: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
  },

  skipText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  submitBtn: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: "#FF6C44",
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  // MODAL
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  modalCard: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },

  modalClose: {
    alignSelf: "flex-end",
  },

  modalImage: {
    width: 90,
    height: 90,
    marginTop: 10,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },

  modalMsg: {
    textAlign: "center",
    color: "#666",
    marginVertical: 10,
    fontSize: 14,
  },
  icon:{
    fontSize:30
  },
  modalBtn: {
    backgroundColor: "#FF6C44",
    paddingVertical: 12,
    borderRadius: 25,
    width: "70%",
    alignItems: "center",
    marginTop: 10,
  },
icon:{
    fontSize:30
},
  modalBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
