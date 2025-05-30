import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 10,
    padding: 10,
    width: "80%",
  },
  progressContainer: {
    flexDirection: "row",
    height: 10,
    gap: 4,
    marginTop: 5,
  },
  progressSegment: {
    flex: 1,
    height: "100%",
    borderRadius: 5,
  },
  completed: {
    backgroundColor: "#4CAF50",
  },
  current: {
    backgroundColor: "#2196F3",
  },
  upcoming: {
    backgroundColor: "#E0E0E0",
  },
});
