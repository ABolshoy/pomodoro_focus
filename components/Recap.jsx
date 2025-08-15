import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { saveCompletedPomodoroSession } from "../utils/sessionStorage";
import { s } from "./Recap.style";

export function Recap() {
  const [text, setText] = useState("");
  const MAX_CHARS = 100;

  const [feedback, setFeedback] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleValidate = async () => {
    setFeedback(text);

    try {
      const sessionComplete = {
        id: Date.now(),
        type: "SESSION COMPLETE",
        totalDuration: Math.floor(125),
        totalBreaks: Math.floor(20),
        feedback: text.trim() || null,
        activity: text.trim(),
      };
      await saveCompletedPomodoroSession(sessionComplete);

      setIsSaved(true);
      // console.log("SESSION COMPLETE SAUVEGARDEE!");
    } catch (error) {
      console.error("Error saving session: ", error);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.text}>What did you do during this session?</Text>
      <View style={s.inputContainer}>
        <TextInput
          style={s.placeholder}
          placeholder="I focused on doing..."
          placeholderTextColor="#666"
          multiline
          numberOfLines={1}
          maxLength={MAX_CHARS}
          value={text}
          onChangeText={setText}
          editable={!isSaved}
        />
        <Text style={s.charCount}>
          {text.length}/{MAX_CHARS}
        </Text>
        <TouchableOpacity
          style={[s.validate, isSaved && { backgroundColor: "#4CAF50" }]}
          disabled={text.length === 0 || isSaved}
          onPress={handleValidate}
        >
          <Text style={s.validateText}>{isSaved ? "Saved!" : "Validate!"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
