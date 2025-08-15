import { useAudioPlayer } from "expo-audio";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, Vibration, View } from "react-native";
import { schedulePomodoroNotification } from "../utils/notifications";
import { saveCompletedPomodoroCycle } from "../utils/sessionStorage";
import { s } from "./Timer.style";

export function Timer({
  duration,
  secondsLeft,
  setSecondsLeft,
  isRunning,
  setIsRunning,
  isFocus,
  setIsFocus,
  whichSet,
  setWhichSet,
}) {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const breakPlayer = useAudioPlayer(require("../assets/sounds/break.wav"));
  const focusPlayer = useAudioPlayer(require("../assets/sounds/focus.wav"));

  breakPlayer.volume = 1.0;
  focusPlayer.volume = 0.4;

  const endTimeRef = useRef(null);

  useEffect(() => {
    // Pas besoin de setup ou cleanup manual avec useAudioPlayer
    // Le hook gère automatiquement le cycle de vie
  }, []);

  useEffect(() => {
    const progress = 1 - secondsLeft / duration;
    const fillHeight = 300 * progress;

    Animated.timing(animatedHeight, {
      toValue: fillHeight,
      duration: 900,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [secondsLeft, duration]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      if (!endTimeRef.current) {
        endTimeRef.current = Date.now() + secondsLeft * 1000;
      }
      interval = setInterval(() => {
        const remaining = Math.max(
          0,
          Math.floor((endTimeRef.current - Date.now()) / 1000)
        );
        setSecondsLeft(remaining);
        if (remaining <= 0) {
          clearInterval(interval);
          endTimeRef.current = null;
          setIsFocus((prevFocus) => {
            const newFocus = !prevFocus;
            // console.log(
            //   `Timer ended - prevFocus: ${prevFocus}, newFocus: ${newFocus}`
            // );
            setIsRunning(false);
            if (prevFocus) {
              // On était en focus, on passe en break
              schedulePomodoroNotification(
                `Cycle ${whichSet + 1} terminé — Bonne pause !`
              );
              // console.log(
              //   "Switching to BREAK - should vibrate and play break sound"
              // );
              // Vibration.vibrate([0, 500, 200, 500]);
              breakPlayer.seekTo(0);
              breakPlayer.play();
              setWhichSet((prevSet) => prevSet + 1);
              const cycleEnded = {
                id: Date.now(),
                duration: Math.floor(duration / 60),
                endedAt: new Date().toISOString(),
                cycleNumber: whichSet + 1,
              };
              saveCompletedPomodoroCycle(cycleEnded)
                .then(() => {
                  console.log(`Cycle ${whichSet + 1} saved!`);
                })
                .catch((error) => {
                  console.error("Error saving cycle: ", error);
                });
            } else {
              // On était en break, on passe en focus
              schedulePomodoroNotification(`Pause terminée — Focus !`);
              console.log(
                "Switching to FOCUS - should vibrate and play focus sound"
              );
              // Vibration.vibrate([0, 500]);
              focusPlayer.seekTo(0);
              focusPlayer.play();
            }

            if (whichSet < 4 || (whichSet === 4 && newFocus)) {
              setTimeout(() => {
                endTimeRef.current = null;
                setIsRunning(true);
              }, 100);
            }

            return newFocus;
          });
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, setIsFocus, setWhichSet, setIsRunning, isFocus, whichSet]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const format = (n) => n.toString().padStart(2, "0");

  return (
    <View style={s.container}>
      <View style={s.timer}>
        <Animated.View
          style={[s.fillMask, { height: animatedHeight }]}
        ></Animated.View>
        {whichSet === 5 ? (
          <Text style={s.time}>00:00</Text>
        ) : (
          <Text style={s.time}>
            {format(minutes)}:{format(seconds)}
          </Text>
        )}
      </View>
    </View>
  );
}
