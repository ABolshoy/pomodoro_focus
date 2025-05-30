import { View } from "react-native";
import { s } from "./ProgressBar.style";

export function ProgressBar() {
    return (
        <View style={s.container}>
            <View style={s.progressContainer}>
                <View style={[s.progressSegment, s.completed]}></View>
                <View style={[s.progressSegment, s.completed]}></View>
                <View style={[s.progressSegment, s.current]}></View>
                <View style={[s.progressSegment, s.upcoming]}></View>
                <View style={[s.progressSegment, s.upcoming]}></View>
            </View>
        </View>
    );
}