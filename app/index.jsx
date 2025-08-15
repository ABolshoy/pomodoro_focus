import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimerView from "../components/TimerView";
import {
  requestNotificationPermissions,
  setupNotificationChannel,
} from "../utils/notifications";
import { useEffect } from "react";
import { s } from "./index.style";
import { Audio } from "expo-audio";

export default function App() {
  useEffect(() => {
    async function init() {
      await requestNotificationPermissions();
      await setupNotificationChannel();

      // Configuration globale du mode audio
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        interruptionModeIOS: "mixWithOthers",
        interruptionModeAndroid: "duckOthers",
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
      });
    }
    init();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TimerView />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
