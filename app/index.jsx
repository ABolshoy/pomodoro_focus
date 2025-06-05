import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Buttons } from "../components/Buttons";
import { ProgressBar } from "../components/ProgressBar";
import { Timer } from "../components/Timer";
import { TopSentences } from "../components/TopSentences";
import { s } from "./index.style";


export default function App() {

  const [isRunning, setIsRunning] = useState(false)
  const [duration, setDuration] = useState(25 * 60)
  const [secondsLeft, setSecondsLeft] = useState(duration)
  const [mode, setMode] = useState(true)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TopSentences mode={mode} />
        <Timer 
                duration={duration}
                secondsLeft={secondsLeft}
                setSecondsLeft={setSecondsLeft}
                isRunning={isRunning}
                />
        <ProgressBar />
        <Buttons 
          onPlay={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
          onReset={() => {
              setIsRunning(false);
              setSecondsLeft(duration);
          }}
          isRunning={isRunning}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
