import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimerView from "../components/TimerView";
import { s } from "./index.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TimerView />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
