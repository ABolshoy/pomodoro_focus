import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  timer: {
    backgroundColor: "#E6DCCD",
    // backgroundColor: "#FF4C3B",
    // backgroundColor: "#1B7F84",
    width: 300,
    height: 300,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  text: {
    color: "#E6DCCD",
    fontSize: 25,
    fontWeight: "bold",
  },
  time: {
    color: "#1A1A1D",
    fontSize: 50,
    fontWeight: "bold",
  },
});
