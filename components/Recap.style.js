import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
    color: "#E6DCCD",
    marginBottom: 5,
  },
  placeholder: {
    flex: 1,
    backgroundColor: "#E6DCCD",
    padding: 15,
    borderRadius: 10,
    color: "#1A1A1D",
    minHeight: 50,
    maxHeight: 100,
    textAlignVertical: "top",
  },
  charCount: {
    color: "#E6DCCD",
    fontSize: 12,
    position: "absolute",
    bottom: -20,
    right: 0,
  },
  validate: {
    backgroundColor: "#1B7F84",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  validateText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A1D",
    fontSize: 15,
  },
});
