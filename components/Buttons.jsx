import Foundation from '@expo/vector-icons/Foundation';
import { TouchableOpacity, View } from "react-native";
import { s } from "./Buttons.style";

export function Buttons() {
    return (
    <View style={s.container}>
        <TouchableOpacity style={s.lateralButtons}>
            <Foundation name="pause" size={24} color="#E6DCCD" />
        </TouchableOpacity>
        <TouchableOpacity style={s.middleButton}>
            <Foundation name="play" size={24} color="#E6DCCD" />
        </TouchableOpacity>
        <TouchableOpacity style={s.lateralButtons}>
            <Foundation name="refresh" size={24} color="#E6DCCD" />
        </TouchableOpacity>
    </View>)
}