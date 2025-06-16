import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./Recap.style";

export function Recap() {
  const [text, setText] = useState("");
  const MAX_CHARS = 100;

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
        />
        <Text style={s.charCount}>
          {text.length}/{MAX_CHARS}
        </Text>
        <TouchableOpacity style={s.validate} disabled={text.length === 0}>
          <Text style={s.validateText}>Validate!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
