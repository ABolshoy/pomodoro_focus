import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import { format, parseISO, startOfWeek } from "date-fns";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { getAllCyclesHistory } from "../utils/sessionStorage";
import { s } from "./Streak.style";

export function Streak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const calculateStreak = async () => {
      const history = await getAllCyclesHistory();
      const weeks = {};
      Object.keys(history).forEach((dateStr) => {
        const date = parseISO(dateStr);
        const weekStart = startOfWeek(date, { weekStartsOn: 1 });
        const weekKey = format(weekStart, "yyyy-'W'II");

        if (!weeks[weekKey]) {
          weeks[weekKey] = new Set();
        }
        weeks[weekKey].add(dateStr);
      });
      const sortedWeekKeys = Object.keys(weeks).sort().reverse();
      let currentStreak = 0;

      for (let i = 0; i < sortedWeekKeys.length; i++) {
        const week = sortedWeekKeys[i];
        const activeDays = weeks[week];
        if (activeDays.size >= 5) {
          currentStreak++;
        } else {
          break;
        }
      }
      setStreak(currentStreak);
    };
    calculateStreak();
  }, []);

  return (
    <View style={s.container}>
      <FontAwesome5 name="fire" size={25} color="red" style={s.fire} />
      <Text style={s.text}>{streak}</Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Streak rules:",
            "You need to do 5 days to unlock the streak. When you get it, you must do at least 5 days in a week to keep it alive! \nHave fun in your focus process!"
          );
        }}
        style={s.question}
      >
        <Octicons name="question" size={20} color="black" style={s.question} />
      </TouchableOpacity>
    </View>
  );
}
