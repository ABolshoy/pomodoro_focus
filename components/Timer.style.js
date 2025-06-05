import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  timer: {
    backgroundColor: "#E6DCCD",
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
    overflow: "hidden",
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  fillMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#FF4C3B",
    zIndex: 1,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
});
