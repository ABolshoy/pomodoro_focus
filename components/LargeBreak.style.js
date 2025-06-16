import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  timer: {
    backgroundColor: "#E6DCCD",
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
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#E6DCCD",
    flex: 1,
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
});
