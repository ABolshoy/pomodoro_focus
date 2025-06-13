import { Text, View } from "react-native";
import { s } from "./TopSentences.style";

export function TopSentences({ isFocus }) {
  return (
    <View>
      {isFocus ? (
        <>
          <Text style={s.text}>Time to focus!</Text>
          <Text style={s.text}>Keep going, you're doing great!</Text>
        </>
      ) : (
        <>
          <Text style={s.text}>Time to relax!</Text>
          <Text style={s.text}>Recharge and come back stronger!</Text>
        </>
      )}
    </View>
  );
}
