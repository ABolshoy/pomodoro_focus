import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TimerView from "../components/TimerView";
import { requestNotificationPermissions, setupNotificationChannel } from "../utils/notifications";
import { s } from "./index.style";

export default function App() {
  useEffect(() => {
    async function initNotifications() {
      await requestNotificationPermissions();
      await setupNotificationChannel(); // 🔹 Nécessaire pour Android
    }
    initNotifications();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TimerView />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
