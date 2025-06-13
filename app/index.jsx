import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Buttons } from "../components/Buttons";
import { ProgressBar } from "../components/ProgressBar";
import { Timer } from "../components/Timer";
import { TopSentences } from "../components/TopSentences";
import { s } from "./index.style";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(25 * 60);
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const [isFocus, setIsFocus] = useState(true);
  const [whichSet, setWhichSet] = useState(0);

  useEffect(() => {
    setDuration(isFocus ? 0.1 * 60 : 0.1 * 60);
    setSecondsLeft(isFocus ? 0.1 * 60 : 0.1 * 60);
  }, [isFocus]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <TopSentences isFocus={isFocus} />
        <Timer
          duration={duration}
          secondsLeft={secondsLeft}
          setSecondsLeft={setSecondsLeft}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          ifFocus={isFocus}
          setIsFocus={setIsFocus}
          whichSet={whichSet}
          setWhichSet={setWhichSet}
        />
        <ProgressBar whichSet={whichSet} isFocus={isFocus} />
        <Buttons
          whichSet={whichSet}
          onPlay={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
          onReset={() => {
            if (whichSet === 5) {
              setWhichSet(0);
              setIsFocus(true);
            } else {
              setIsRunning(false);
              setSecondsLeft(duration);
            }
          }}
          isRunning={isRunning}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
