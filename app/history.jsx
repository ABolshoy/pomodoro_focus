import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HistoryView } from "../components/HistoryView";
import { s } from "./history.style";

export default function History() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <HistoryView />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
