import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { s } from "./LargeBreak.style";
import { Recap } from "./Recap";

export function LargeBreak({ setWhichSet, setIsFocus, setLargeBreak }) {
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);
  const duration = 30 * 60;

  const endTimeRef = useRef(null);

  useEffect(() => {
    let interval;
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
        setWhichSet(0);
        setIsFocus(true);
        setLargeBreak(false);
      }
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
