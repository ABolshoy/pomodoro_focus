import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-web";
import { s } from "./LargeBreak.style";
import { Recap } from "./Recap";

export function LargeBreak({
  whichSet,
  setWhichSet,
  setIsFocus,
  isFocus,
  setLargeBreak,
}) {
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);
  const duration = 30 * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setWhichSet(0);
          setIsFocus(true);
          setLargeBreak(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const format = (n) => n.toString().padStart(2, "0");

  return (
    <View style={s.container}>
      <Text style={s.text}>
        Large break! {"\n"}
        It is essential and part of the process to take some longer breaks. You
        should use that time to go for a walk!
      </Text>
      <View style={s.timer}>
        <Text style={s.time}>
          {format(minutes)}:{format(seconds)}
        </Text>
      </View>
      <Recap></Recap>
    </View>
  );
}
