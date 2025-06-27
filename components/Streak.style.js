import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#E6DCCD",
    width: "60%",
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  question: {
    alignSelf: "flex-start",
  },
  text: {
    color: "#1A1A1D",
    fontSize: 50,
    fontWeight: "bold",
  },
});
