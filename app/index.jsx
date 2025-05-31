import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Buttons } from "../components/Buttons";
import { ProgressBar } from "../components/ProgressBar";
import { Timer } from "../components/Timer";
import { TopSentences } from "../components/TopSentences";
import { s } from "./index.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TopSentences />
        <Timer></Timer>
        {/* <View>
          <Text style={{color:"#E6DCCD"}}>TIMER</Text>
          <Text style={{color:"#E6DCCD"}}>Displays, time remaining and total time, working session (2/5), end of the session (hour)</Text>
        </View> */}
        <ProgressBar />
        <Buttons />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
