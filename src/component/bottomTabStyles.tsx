import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },

  tabBar: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 40,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
  },

  // Normal icon wrapper
  iconWrapper: {
    padding: 10,
    borderRadius: 30,
  },

  // Grey background for non-center active ones (you can remove if not needed)
  activeIconWrapper: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 30,
  },

  // ⭐ ACTIVE CENTER ICON (orange bubble)
centerActiveIcon: {
  backgroundColor: "#FF6B3C",
  padding: 10,        // ⭐ Smaller so icon remains visible
  borderRadius: 30,
  elevation: 6,
  shadowColor: "#FF6B3C",
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
},

icon: {
  width: 28,          // ⭐ Bigger so visible inside circle
  height: 28,
  tintColor: undefined,  // ⭐ Remove tint to show colored PNG
},

activeIcon: {
  tintColor: undefined,   // ⭐ Must be removed for PNG
},



  // Active text label
  activeLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#FF6B3C",
    fontWeight: "600",
  },
});
