import Foundation from "@expo/vector-icons/Foundation";
import { TouchableOpacity, View } from "react-native";
import { s } from "./Buttons.style";

export function Buttons({
  onPlay,
  onPause,
  onReset,
  isRunning,
  whichSet,
  onNext,
}) {
  return (
    <View style={s.container}>
      {whichSet !== 5 ? (
        <>
          {isRunning ? (
            <TouchableOpacity style={s.lateralButtons} onPress={onPause}>
              <Foundation name="pause" size={24} color="#E6DCCD" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={s.middleButton} onPress={onPlay}>
              <Foundation name="play" size={24} color="#E6DCCD" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={s.lateralButtons} onPress={onReset}>
            <Foundation name="refresh" size={24} color="#E6DCCD" />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={s.lateralButtons} onPress={onNext}>
          <Foundation name="next" size={24} color="#E6DCCD" />
        </TouchableOpacity>
      )}
    </View>
  );
}
