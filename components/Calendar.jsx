import { format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export function Calendar({ sessionData = {}, onSelectDay }) {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 84; i++) {
      const date = subDays(today, i);
      const key = format(date, "dd-MM-yyyy");
      const sessions = sessionData[key]?.sessions || 0;
      days.unshift({ date: key, sessions });
    }
    setCalendarData(days);
  }, [sessionData]);

  const getColor = (count) => {
    if (count >= 5) return "#1B7F84";
    if (count >= 3) return "#4AB3B6";
    if (count >= 1) return "#A8DADC";
    return "#E6DCCD";
  };
  const NUM_DAYS = 84;
  const NUM_COLUMNS = 7;

  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: NUM_COLUMNS }).map((_, colIndex) => (
        <View key={colIndex} style={{ flexDirection: "column" }}>
          {calendarData
            .filter((_, i) => i % NUM_COLUMNS === colIndex)
            .map((day, rowIndex) => (
              <TouchableOpacity
                key={day.date}
                onPress={() => onSelectDay?.(day.date)}
                style={{
                  width: 25,
                  height: 25,
                  margin: 10,
                  backgroundColor: getColor(day.sessions),
                  borderRadius: 5,
                }}
              />
            ))}
        </View>
      ))}
    </View>
  );
}
