import { View } from "react-native";
import { s } from "./ProgressBar.style";

export function ProgressBar({ whichSet, isFocus }) {
  const totalCycles = 5;
  const segments = Array.from({ length: totalCycles }, (_, index) => {
    if (index < whichSet) return s.completed;
    if (index === whichSet && isFocus) return s.current;
    return s.upcoming;
  });

  return (
    <View style={s.container}>
      <View style={s.progressContainer}>
        {segments.map((style, index) => (
          <View key={index} style={[s.progressSegment, style]}></View>
        ))}
      </View>
    </View>
  );
}
