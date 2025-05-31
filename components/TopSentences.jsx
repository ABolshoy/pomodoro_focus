import { Text, View } from "react-native";
import { s } from "./TopSentences.style";

export function TopSentences() {
    return (<View>
        <Text style={s.text}>Time to focus!</Text>
        <Text style={s.text}>Each session is a step to your goals!</Text>

        {/* <Text style={s.text}>Time to relax!</Text>
        <Text style={s.text}>Break times are as  important as focus!</Text> */}
    </View>);
}