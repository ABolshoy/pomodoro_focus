import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 80,
    width: "80%",
  },
  middleButton: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#1B7F84",
  },
  lateralButtons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#3C3C42",
  },
});
