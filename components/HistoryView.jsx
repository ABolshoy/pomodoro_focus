import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./HistoryView.style";

export function HistoryView() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <Text style={s.topText}>
          History is a really good idea:{"\n"}
          Track it, improve it!
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
