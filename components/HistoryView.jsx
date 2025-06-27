import { format, parse } from "date-fns";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getAllCyclesHistory } from "../utils/sessionStorage";
import { Calendar } from "./Calendar";
import { s } from "./HistoryView.style";
import { Streak } from "./Streak";

export function HistoryView() {
  const todayKey = format(new Date(), "dd-MM-yyyy");
  const [selectedDate, setSelectedDate] = useState(todayKey);
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    const loadHistory = async () => {
      const rawHistory = await getAllCyclesHistory();
      const formattedHistory = {};

      Object.entries(rawHistory).forEach(([isoDate, sessions]) => {
        const readableDate = format(
          parse(isoDate, "yyyy-MM-dd", new Date()),
          "dd-MM-yyyy"
        );
        formattedHistory[readableDate] = {
          sessions: sessions.length,
          feedbacks: sessions.map((s) => s.feedback).filter(Boolean),
        };
      });

      setSessionData(formattedHistory);
    };

    loadHistory();
  }, []);

  const selected = sessionData[selectedDate] || { sessions: 0, feedbacks: [] };

  return (
    <View style={s.container}>
      <Text style={s.topText}>Track it, improve it!</Text>
      <Streak />
      <View style={{ marginVertical: -20 }}>
        <Text style={s.topText}>
          {selectedDate} – {selected.sessions} session(s)
        </Text>
        {selected.feedbacks.map((f, i) => (
          <Text key={i} style={s.feedbackText}>
            • {f}
          </Text>
        ))}
      </View>
      <Calendar sessionData={sessionData} onSelectDay={setSelectedDate} />
    </View>
  );
}
