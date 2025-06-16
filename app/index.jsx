import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Buttons } from "../components/Buttons";
import { LargeBreak } from "../components/LargeBreak";
import { ProgressBar } from "../components/ProgressBar";
import { Timer } from "../components/Timer";
import { TopSentences } from "../components/TopSentences";
import { s } from "./index.style";

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(25 * 60);
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const [isFocus, setIsFocus] = useState(true);
  const [whichSet, setWhichSet] = useState(5);
  const [largeBreak, setLargeBreak] = useState(false);

  useEffect(() => {
    setDuration(isFocus ? 25 * 60 : 5 * 60);
    setSecondsLeft(isFocus ? 25 * 60 : 5 * 60);
  }, [isFocus]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {!largeBreak ? (
          <>
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
              onNext={() => setLargeBreak(true)}
              isRunning={isRunning}
            />
          </>
        ) : (
          <LargeBreak
            whichSet={whichSet}
            setWhichSet={setWhichSet}
            ifFocus={isFocus}
            setIsFocus={setIsFocus}
            setLargeBreak={setLargeBreak}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
