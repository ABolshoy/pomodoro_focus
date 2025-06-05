import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    height: 100,
    width: "80%",
  },
  middleButton: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#1B7F84",
  },
  lateralButtons: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#3C3C42",
  },
});
