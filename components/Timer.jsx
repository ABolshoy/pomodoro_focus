import { useAudioPlayer } from "expo-audio";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, Vibration, View } from "react-native";
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

  const breakSound = useAudioPlayer(require("../assets/sounds/break.wav"));
  const focusSound = useAudioPlayer(require("../assets/sounds/focus.wav"));

  breakSound.volume = 0.3;
  focusSound.volume = 0.1;

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
    if (isRunning) {
      const interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsFocus((prevFocus) => {
              const newFocus = !prevFocus;
              if (!newFocus) {
                Vibration.vibrate(500);
                breakSound.play();
                setWhichSet((prevSet) => prevSet + 1);
              } else {
                Vibration.vibrate(500);
                focusSound.play();
              }
              setIsRunning(false);
              if (whichSet < 4 || (whichSet === 4 && newFocus)) {
                setTimeout(() => setIsRunning(true), 10);
              }
              return newFocus;
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
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
        <Text style={s.time}>
          {format(minutes)}:{format(seconds)}
        </Text>
      </View>
    </View>
  );
}
