import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "600",
  },

  mapContainer: {
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },

  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
    icon:{
    fontSize:30
  },
  ico:{
    fontSize:5
  }
,
  locationBox: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
  },

  locationLabel: {
    fontSize: 15,
    fontWeight: "600",
  },

  locationAddress: {
    color: "#777",
    maxWidth: 220,
    marginTop: 3,
  },

  addNewBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 20,
  },

  addNewText: {
    fontSize: 15,
    color: "#FF6C44",
    marginLeft: 6,
  },

  applyBtn: {
    backgroundColor: "#FF6C44",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  applyText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  modelImage:{
    height:25,
    width:25
    
  }
});
